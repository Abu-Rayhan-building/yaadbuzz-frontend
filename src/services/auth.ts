import LocalStorageAccessor from './local-storage';

const token = new LocalStorageAccessor<string>('token');

export function getToken(): string | null {
  return token.getValue();
}

export function setToken(value: string): void {
  token.setValue(value);
}

export function isLoggedIn(): boolean {
  return Boolean(token.getValue());
}
