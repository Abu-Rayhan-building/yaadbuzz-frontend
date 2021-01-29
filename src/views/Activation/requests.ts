import http from 'src/services/http';
import { ActivationForm } from './models';

async function catchError(error: unknown): Promise<never> {
  if (!(error instanceof http.HTTPError)) {
    return Promise.reject('error.connectionError');
  }

  const { message } = await error.response.json();
  return await Promise.reject(message);
}

export async function activate(values: ActivationForm): Promise<unknown> {
  try {
    return http.get(`activate?key=${values.activationKey}`, {});
  } catch (error) {
    return catchError(error);
  }
}
