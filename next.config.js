/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports =
  process.env.ANALYZE !== "true"
    ? nextConfig
    : require("@next/bundle-analyzer")({ enabled: true })(nextConfig);
