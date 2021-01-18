import ky from 'ky';

import { apiUrl, isDev } from '../configs';

export default ky.create({
  prefixUrl: isDev ? '/api' : `${apiUrl}api`,
});
