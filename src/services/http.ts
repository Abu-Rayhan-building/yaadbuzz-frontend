import ky from 'ky';

import { apiUrl, isDev } from '../configs';

import { getToken, isLoggedIn } from './auth';

export default ky.create({
  prefixUrl: isDev ? '/api' : `${apiUrl}api`,
  hooks: {
    beforeRequest: [
      (request) => {
        if (!isLoggedIn()) {
          return request;
        }

        return request.headers.set('Authorization', `Bearer ${getToken()}`);
      },
    ],
  },
});
