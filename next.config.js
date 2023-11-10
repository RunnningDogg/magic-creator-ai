/** @type {import('next').NextConfig} */
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
      }
    ]
  }
}

module.exports = nextConfig
