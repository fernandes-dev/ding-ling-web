module.exports = {
  transpileDependencies: ['vuetify'],
  pwa: {
    workboxOptions: {
      // ...other Workbox options...
      exclude: [/netlify.toml/],
    },
  },
};
