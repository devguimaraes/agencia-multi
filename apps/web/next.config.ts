import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: ["@multi-br/ui", "@multi-br/config", "@multi-br/types"],
	images: {
		qualities: [75, 100],
	},
};

export default nextConfig;
