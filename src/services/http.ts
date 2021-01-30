import ky from 'ky';

import { apiUrlDev, apiUrlProd, isDev } from '../configs';

export default ky.create({
  // fuck this is needed for cookies
  credentials: 'include',
  prefixUrl: isDev ? `${apiUrlDev}api` : `${apiUrlProd}api`,
});
