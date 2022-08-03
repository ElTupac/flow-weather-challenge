/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports =
  process.env.ANALYZE !== "true"
    ? nextConfig
    : require("@next/bundle-analyzer")({ enabled: true })(nextConfig);
