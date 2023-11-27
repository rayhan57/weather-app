/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "source.unsplash.com",
      },
      {
        hostname: "openweathermap.org",
      },
    ],
  },
};

module.exports = nextConfig;
