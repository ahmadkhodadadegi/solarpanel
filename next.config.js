// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  "build": "next build && next export",
  eslint: {
    ignoreDuringBuilds: true,
  },

}

module.exports = nextConfig