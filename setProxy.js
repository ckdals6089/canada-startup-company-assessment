const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/contacts',
    proxy({
      target: 'https://v1.stormapi.com',
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    '/users',
    proxy({
      target: 'https://v1.stormapi.com',
      secure: false,
      changeOrigin: true,
    })
  );
};
