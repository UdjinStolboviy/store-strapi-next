export default [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "img-src": ["*"],
        },
      },
    },
  },
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:8082', 'https://d743-88-18-250-46.eu.ngrok.io', 'https://fishkyiv.vercel.app', 'http://localhost:3000']
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
