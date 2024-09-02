/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.traction.one'],
    domains: ['raw.githubusercontent.com'],
  }
};

export default nextConfig;
