/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  images: {
    domains: [
      "localhost:8082",
      "localhost",
      "https://65b6-88-19-238-70.eu.ngrok.io",
      "65b6-88-19-238-70.eu.ngrok.io",
    ],
  },
};

module.exports = nextConfig;
