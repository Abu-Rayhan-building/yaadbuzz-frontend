import ky from 'ky-universal';

import { apiUrl, isDev } from 'configs';
import { getToken, isLoggedIn } from 'modules/services/auth';

export default ky.create({
  prefixUrl: isDev ? '/api' : `${apiUrl}api`,
  beforeRequest: [
    (request) => {
      if (!isLoggedIn()) {
        return request;
      }

      return request.headers.set('Authorization', `Bearer ${getToken()}`);
    },
  ],
});
