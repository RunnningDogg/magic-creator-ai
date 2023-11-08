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
    ]
  }
}

module.exports = nextConfig
