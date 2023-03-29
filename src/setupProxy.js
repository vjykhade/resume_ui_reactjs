import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    '/resume',
    createProxyMiddleware({
      target: 'http://localhost:8080/',
      changeOrigin: true,
      clg
    })
  );
  console.log("coming to proxy")
};
 