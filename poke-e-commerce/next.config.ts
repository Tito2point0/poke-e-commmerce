/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.fallencollector.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ebayimg.com',
      },
      {
        protocol: 'https',
        hostname: 'i.psacard.com',
      },
      {
        protocol: 'https',
        hostname: 'levelupstore.co.za', // If Google URLs are needed
      },
    ],
  },
};

module.exports = nextConfig;

 