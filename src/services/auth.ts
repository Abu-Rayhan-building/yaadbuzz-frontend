import Cookies from 'js-cookie';

export function isLoggedIn(): boolean {
  return Boolean(Cookies.get('someSessionId'));
}
