import http from 'src/services/http';
import { IDepartment } from 'src/model/department.model';

export function getDepartments(): Promise<Array<IDepartment>> {
  return http.get('department/me').json();
}
