module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/generate-sitemap')
    }

    return config
  },
  future: {
    webpack5: true
  }
}
