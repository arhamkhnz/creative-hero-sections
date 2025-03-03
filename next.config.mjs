/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/hero",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
