import http from '@/services/http';
import { setToken } from '@/services/auth';

function catchError(error: any) {
  if (!(error instanceof http.HTTPError)) {
    return Promise.reject('error.connectionError');
  }

  return error.response
    .json()
    .then(({ message } = {}) => Promise.reject(message));
}

export function register(values: {
  login: string;
  email: string;
  password: string;
}): Promise<Response> {
  return http
    .post('register', {
      json: values,
    })
    .catch(catchError);
}

export function resetPassword({ email }: { email: string }): Promise<Response> {
  return http
    .post('account/reset-password/init', {
      body: email,
    })
    .catch(catchError);
}

export function login(values: {
  login: string;
  password: string;
}): Promise<void> {
  return http
    .post('authenticate', {
      json: values,
    })
    .json()
    .then(({ id_token: token }: any) => setToken(token))
    .catch(catchError);
}
