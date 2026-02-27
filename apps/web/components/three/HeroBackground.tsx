"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * Shader de gradiente animado com ruído — background ambiental do Hero.
 * Cores roxo→rosa que "respiram" sutilmente.
 * NÃO é um objeto 3D — é um plano fullscreen com fragment shader.
 */

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision mediump float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColorA;  // Roxo Multi (Base)
  uniform vec3 uColorB;  // Azul Multi (Flow)
  uniform vec3 uColorC;  // Rosa Multi (Accent)
  uniform vec3 uColorD;  // Amarelo Multi (Highlight sutil)

  varying vec2 vUv;

  // Simplex-like noise (hash-based para performance)
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(
      0.211324865405187,  // (3.0-sqrt(3.0))/6.0
      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
      -0.577350269189626, // -1.0 + 2.0 * C.x
      0.024390243902439   // 1.0 / 41.0
    );
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;

    // Movimento mais lento e suave
    float t = uTime * 0.05;

    // Noise aninhado para efeito líquido (domain warping sutil)
    float n1 = snoise(uv * 1.2 + t);
    float n2 = snoise(uv * 2.5 - t * 0.5 + n1 * 0.5);
    
    // Gradiente Base: Roxo (A) para Azul (B)
    // O Azul entra de forma mais profunda e suave
    float baseMix = smoothstep(-0.5, 1.5, uv.y + n2 * 0.3);
    vec3 color = mix(uColorA, uColorB, baseMix * 0.7);

    // Adição de Rosa (C) em fluxos dinâmicos
    float pinkFlow = smoothstep(0.3, 0.8, n1 * 0.5 + 0.5);
    color = mix(color, uColorC, pinkFlow * 0.25);

    // Brilho sutil de Amarelo (D) - harmoniza com o loader
    // Funciona como faíscas ou luz refletida no topo do noise
    float highlight = smoothstep(0.7, 1.0, n2);
    color = mix(color, uColorD, highlight * 0.08);

    // Vignette mais suave para não escurecer demais as pontas no mobile
    float d = distance(uv, vec2(0.5, 0.5));
    color *= smoothstep(1.3, 0.4, d);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function GradientPlane() {
	const meshRef = useRef<THREE.Mesh>(null);

	const uniforms = useMemo(
		() => ({
			uTime: { value: 0 },
			uResolution: {
				value: new THREE.Vector2(window.innerWidth, window.innerHeight),
			},
			uColorA: { value: new THREE.Color("#5D018A") }, // Roxo Multi (Base)
			uColorB: { value: new THREE.Color("#014FCD") }, // Azul Multi (Flow)
			uColorC: { value: new THREE.Color("#E60057") }, // Rosa Multi (Accent)
			uColorD: { value: new THREE.Color("#FAC32A") }, // Amarelo Multi (Highlight)
		}),
		[],
	);

	useFrame((state) => {
		if (meshRef.current) {
			const material = meshRef.current.material as THREE.ShaderMaterial;
			// state.clock already exists in R3F, using it directly avoids deprecation warnings of manual THREE.Clock
			material.uniforms.uTime.value = state.clock.elapsedTime;
		}
	});

	return (
		<mesh ref={meshRef}>
			<planeGeometry args={[2, 2]} />
			<shaderMaterial
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				uniforms={uniforms}
				depthWrite={false}
				depthTest={false}
			/>
		</mesh>
	);
}

/**
 * Background ambiental do Hero com gradiente shader animado.
 * Carregado via dynamic import para não impactar o bundle principal.
 */
export function HeroBackground() {
	return (
		<div className="absolute inset-0 z-0" aria-hidden="true" style={{ opacity: 0.85 }}>
			<Canvas
				gl={{
					antialias: false,
					alpha: false,
					powerPreference: "low-power",
					failIfMajorPerformanceCaveat: true,
				}}
				camera={{ position: [0, 0, 1] }}
				dpr={[1, 1.5]}
				style={{ width: "100%", height: "100%" }}
			>
				<GradientPlane />
			</Canvas>
		</div>
	);
}
