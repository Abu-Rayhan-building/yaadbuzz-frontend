/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware');
const { apiUrlDev } = require('./configs');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: apiUrlDev,
      changeOrigin: true,
    })
  );
};
