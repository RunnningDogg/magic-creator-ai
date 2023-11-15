/** @type {import('next').NextConfig} */
const { PrismaPlugin } = require('@prisma/nextjs-monorepo-workaround-plugin')



const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.ko-fi.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "files.oaiusercontent.com",
        port: '',
        pathname: '/**'
      },
      {
        protocol: "https",
        hostname: "cdn.oaistatic.com",
        port: '',
        pathname: '/**'
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: '',
        pathname: '/**'
      },
      {
        protocol: "https",
        hostname: "*.producthunt.com",
        port: '',
        pathname: '/**'
      },
      {
        protocol: "https",
        hostname: "files.oaiusercontent.com",
        port: '',
        pathname: '/**'
      }
    ]
  }
}

// module.exports = nextConfig

module.exports = {
  webpack: (config, { isServer }) => {
    if (process.env.NODE_ENV !== 'production') {
      config.plugins = [...config.plugins]
    } else {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }

    return config
  },
  ...nextConfig
}