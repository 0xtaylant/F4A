/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['free4alldemo1.s3.eu-central-1.amazonaws.com'],
  },
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
