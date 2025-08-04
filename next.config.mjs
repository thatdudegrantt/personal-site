/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    headers: async () => [
        {
            source: "/(.*)",
            headers: [
                {
                    key: "X-Frame-Options",
                    value: "DENY",
                },
                {
                    key: "X-Content-Type-Options",
                    value: "nosniff",
                },
            ],
        },
    ],
    images: {
        domains: [],
    },
};

export default nextConfig;
