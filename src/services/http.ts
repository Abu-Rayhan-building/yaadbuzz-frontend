import ky from 'ky';

import { apiUrlDev, apiUrlProd, isDev } from '../configs';

export default ky.create({
  prefixUrl: isDev ? `${apiUrlDev}api` : `${apiUrlProd}api`,
});
