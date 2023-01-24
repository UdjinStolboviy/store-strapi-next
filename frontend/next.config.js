/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  images: {
    domains: [
      "localhost:8082",
      "localhost",
      "https://e227-88-18-255-33.eu.ngrok.io",
      "e227-88-18-255-33.eu.ngrok.io",
    ],
  },
};

module.exports = nextConfig;
