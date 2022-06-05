/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  'process.env.BACKEND_URL': prod
    ? 'https://black-turtle.github.io/portfolio'
    : '',
  basePath: prod ? '/portfolio' : '/',
};

module.exports = nextConfig;
