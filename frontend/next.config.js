/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  images: {
    domains: [
      "localhost:8082",
      "localhost",
      "https://6faa-88-18-255-33.eu.ngrok.io",
      "6faa-88-18-255-33.eu.ngrok.io",
    ],
  },
};

module.exports = nextConfig;
