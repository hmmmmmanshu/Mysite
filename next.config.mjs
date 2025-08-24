/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  eslint: {
    // Fast deploy: bypass lint errors on Vercel builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
