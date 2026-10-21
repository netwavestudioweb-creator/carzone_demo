/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
  },
  async redirects() {
    return [
      // Anciennes pages Webador sans équivalent
      { source: '/cart', destination: '/nos-marques-de-voitures', permanent: true },
      { source: '/wishlist', destination: '/nos-marques-de-voitures', permanent: true },
      { source: '/temoignages-clients', destination: '/qui-sommes-nous', permanent: false },
      // Anciennes routes du projet Next.js
      { source: '/catalogue', destination: '/nos-marques-de-voitures', permanent: true },
      { source: '/catalogue/:id', destination: '/nos-marques-de-voitures', permanent: true },
      { source: '/a-propos', destination: '/qui-sommes-nous', permanent: true },
      { source: '/services', destination: '/nos-services', permanent: true },
    ];
  },
};

export default nextConfig;
