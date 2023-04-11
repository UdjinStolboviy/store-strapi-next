/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  images: {
    domains: [
      "localhost:8082",
      "localhost",
      "https://f3be-88-18-249-250.ngrok-free.app",
      "f3be-88-18-249-250.ngrok-free.app",
    ],
  },
};

module.exports = nextConfig;
