/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/customerProfile/:userId',
        destination: '/customerProfile',
      
      },
      {
          source: '/LoanApplication/:userId',
        destination: '/LoanApplication',
      },
    ];
  },
};

module.exports = nextConfig;

