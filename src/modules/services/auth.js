import LocalStorageAccessor from './local-storage';

const token = new LocalStorageAccessor('token');

export function getToken() {
  return token.getValue();
}

export function setToken(value) {
  token.setValue(value);
}

export function isLoggedIn() {
  return Boolean(token.getValue());
}
