import http from 'modules/services/http';
import { setToken } from 'modules/services/auth';

function catchError(error) {
  if (!(error instanceof http.HTTPError)) {
    return Promise.reject('error.connectionError');
  }

  return error.response.json()
    .then(({ message } = {}) => Promise.reject(message));
}

export function signup(values) {
  return http.post('register', {
    json: values,
  })
    .catch(catchError);
}

export function resetPassword({ email }) {
  return http.post('account/reset-password/init', {
    body: email,
  })
    .catch(catchError);
}

export function signin(values) {
  return http.post('authenticate', {
    json: values,
  })
    .json()
    .then(({ id_token: token }) => setToken(token))
    .catch(catchError);
}
