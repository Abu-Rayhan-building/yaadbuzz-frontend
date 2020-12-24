import http from 'modules/services/http';

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

export function signin(values) {
  return http.post('authenticate', {
    json: values,
  })
    .json(({ token }) => token)
    .catch(catchError);
}
