/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production';
const BASE_PATH = process.env.BASE_PATH;

const nextConfig = {
  reactStrictMode: true,
  'process.env.BACKEND_URL': prod
    ? 'https://black-turtle.github.io/portfolio'
    : '',
};

if (BASE_PATH) {
  nextConfig.basePath = ASSETS_BASE_PATH;
}

module.exports = nextConfig;
