/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsHmrCache:false
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:"kbytsldjvzsfpmczeeba.supabase.co"
            }
        ]
    },

    async headers() {
        return [{
            source: "/embed",
            headers: [
                {
                    key: "Content-Security-policy",
                    value:"frame-src 'self' https://smartwheels-waitlist.created.app;"
                }
            ]
        }]
    }
};

export default nextConfig;
