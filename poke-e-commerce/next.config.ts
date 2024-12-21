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
      {
        protocol: 'https',
        hostname: 'assets.pokemon.com',
      },
      {
        protocol: 'https',
        hostname: 'preview.redd.it',
      },
      {
        protocol: 'https',
        hostname: 'external-preview.redd.it',
      },
      
      {
        protocol: 'https',
        hostname: 'www.picclickimg.com',
      },
      {
        protocol: 'https',
        hostname: 'static1.thegamerimages.com',
      },
    ],
  },
};

module.exports = nextConfig;

