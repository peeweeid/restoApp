/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  }
}
const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);
module.exports = nextConfig

