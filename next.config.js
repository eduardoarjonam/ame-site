/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true, // Asegura Webpack en lugar de Turbopack
  },
  images: {
    domains: ['lilo-mepxj07pjwi1er5m.builder-preview.com', 'assets.zyrosite.com']
  },
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
