import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: ["@multi-br/ui", "@multi-br/config", "@multi-br/types"],
	images: {
		qualities: [75, 100],
	},
	async redirects() {
		return [
			{
				source: "/servicos/social-media",
				destination: "/servicos/gestao-de-redes-sociais",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
