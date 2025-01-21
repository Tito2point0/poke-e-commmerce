/* eslint-disable */

// Ensure the Next.js configuration works as expected
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true, // Keeps strict mode enabled for React
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
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
        hostname: 'levelupstore.co.za',
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
      {
        protocol: 'https',
        hostname: 'gamersrowmn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.dexerto.com',
      },
      {
        protocol: 'https',
        hostname: 'static1.srcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
  // If you were using `output: 'export'`, remove it to allow for server-side features.
  // Comment the line below if it's present to enable dynamic server-side behavior.
  // output: 'export',

  // Custom webpack configuration (if required)
  
};

module.exports = nextConfig;
