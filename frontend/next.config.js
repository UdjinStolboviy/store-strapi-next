/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost:8082",
      "localhost",
      "https://d743-88-18-250-46.eu.ngrok.io",
      "d743-88-18-250-46.eu.ngrok.io",
    ],
  },
};

module.exports = nextConfig;
