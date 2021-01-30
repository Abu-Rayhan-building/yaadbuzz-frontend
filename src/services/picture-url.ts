import { apiUrlDev, apiUrlProd, isDev } from '../configs';

export function departmentAvatar(depId: number): string {
  return `${apiUrlDev}api/department/${depId}/picture`;
}
