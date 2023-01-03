/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  images: {
    domains: [
      "localhost:8082",
      "localhost",
      "https://172b-88-19-238-70.eu.ngrok.io",
      "172b-88-19-238-70.eu.ngrok.io",
    ],
  },
};

module.exports = nextConfig;
