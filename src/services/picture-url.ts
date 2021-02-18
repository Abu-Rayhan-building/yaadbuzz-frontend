import { apiUrlDev, apiUrlProd, isDev } from '../configs';

export function departmentAvatar(depId = 1): string {
  const urlPrefix = isDev ? apiUrlDev : apiUrlProd;
  return `${urlPrefix}api/department/${depId}/picture`;
}
