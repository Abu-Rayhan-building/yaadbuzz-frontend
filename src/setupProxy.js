/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware');
const { apiUrl } = require('./configs');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: apiUrl,
      changeOrigin: true,
    })
  );
};
