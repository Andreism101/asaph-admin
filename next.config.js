/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/customerProfile/:userId',
        destination: '/customerProfile',
      },
    ];
  },
};

module.exports = nextConfig;

