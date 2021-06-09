const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/generate-sitemap')
    }
    return config
  },
  i18n: { locales: ['en', 'es', 'ca'], defaultLocale: 'es' },
  future: { webpack5: true }
}

module.exports = withBundleAnalyzer(nextConfig)
