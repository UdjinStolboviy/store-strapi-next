/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  images: {
    domains: [
      "localhost:8082",
      "localhost",
      "https://5fb9-88-18-249-250.ngrok-free.app",
      "5fb9-88-18-249-250.ngrok-free.app",
    ],
  },
};

module.exports = nextConfig;
