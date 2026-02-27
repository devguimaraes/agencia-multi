import "@testing-library/jest-dom/vitest";

Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: (query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: () => {}, // Deprecated
		removeListener: () => {}, // Deprecated
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => false,
	}),
});

Object.defineProperty(window, "IntersectionObserver", {
	writable: true,
	value: class IntersectionObserver {
		observe() {}
		unobserve() {}
		disconnect() {}
	},
});

