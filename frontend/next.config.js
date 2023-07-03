/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  images: {
    domains: [
      "localhost:8082",
      "localhost",
      "https://91d5-88-18-255-208.ngrok-free.app",
      "91d5-88-18-255-208.ngrok-free.app",
    ],
  },
};

module.exports = nextConfig;
