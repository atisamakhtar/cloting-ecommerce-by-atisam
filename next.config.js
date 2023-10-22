/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig

// const withImages = require('next-images');

// module.exports = withImages({
//   images: {
//     domains: ['cdn.sanity.io'], // Add 'cdn.sanity.io' to the list of allowed domains
//   },
// });