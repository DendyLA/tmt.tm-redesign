import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        dangerouslyAllowLocalIP: isDev,
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "3002",
                pathname: "/uploads/**",
            },
        ],
    },
};

export default nextConfig;
