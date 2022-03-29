const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/portudao.io/' : '',
  publicRuntimeConfig: {
    // Will be available on both server and client
    basePath: isProd ? '/portudao.io/' : '/'
  },

}

module.exports = nextConfig
