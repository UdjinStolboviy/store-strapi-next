/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  images: {
    domains: [
      "localhost:8082",
      "localhost",
      "https://1239-88-18-255-33.eu.ngrok.io",
      "1239-88-18-255-33.eu.ngrok.io",
    ],
  },
};

module.exports = nextConfig;
