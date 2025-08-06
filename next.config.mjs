/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'header',
                        key: 'x-forwarded-proto',
                        value: 'http',
                    },
                ],
                destination: 'https://www.bimbus.org/:path*',
                permanent: true,
            },
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'bimbus.org',
                    },
                ],
                destination: 'https://www.bimbus.org/:path*',
                permanent: true,
            },
        ];
    },

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
                {
                    key: 'Strict-Transport-Security',
                    value: 'max-age=63072000; includeSubDomains; preload',
                },
            ],
        },
    ],
    images: {
        domains: [],
    },
};

export default nextConfig;
