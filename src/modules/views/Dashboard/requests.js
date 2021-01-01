import http from 'modules/services/http';

export function getDepartments() {
  return http.get('department/me').json();
}
