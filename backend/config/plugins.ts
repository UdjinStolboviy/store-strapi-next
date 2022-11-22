module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 100000,
      },
    },
  },
  'strapi-plugin-fcm': {
    enabled: true,
    resolve: './src/plugins/strapi-plugin-fcm' // path to plugin folder
  },
});
