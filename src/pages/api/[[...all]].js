import { createProxyMiddleware } from 'http-proxy-middleware';

import { apiUrl, isDev } from 'configs';

const apiProxy = createProxyMiddleware({
  target: apiUrl,
  changeOrigin: true,
  secure: false,
});

export default (req, res) => {
  if (!isDev) {
    res.status(404).send(null);
    return;
  }

  apiProxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result;
    }

    throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`);
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};
