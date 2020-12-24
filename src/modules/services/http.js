import ky from 'ky-universal';

import { apiUrl, isDev } from 'configs';

export default ky.create({
  prefixUrl: isDev ? '/api' : `${apiUrl}api`,
});
