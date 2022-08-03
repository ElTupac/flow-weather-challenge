/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    WEATHER_API_URL: process.env.WEATHER_API_URL,
    TOTAL_FORECAST_DAYS: process.env.TOTAL_FORECAST_DAYS,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports =
  process.env.ANALYZE !== "true"
    ? nextConfig
    : require("@next/bundle-analyzer")({ enabled: true })(nextConfig);
