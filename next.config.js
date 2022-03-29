const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/portudao.io/' : '',
  images: { loader: "custom" },
}

module.exports = nextConfig
