/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-domain.com'], // Add your image domains
    unoptimized: true // Add this if you're using static exports
  },
  experimental: {
    instrumentationHook: true // Enable if you're using instrumentation
  },
  // Add any other necessary configuration
};

module.exports = nextConfig; 