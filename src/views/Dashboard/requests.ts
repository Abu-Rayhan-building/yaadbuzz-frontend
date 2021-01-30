import http from 'src/services/http';
import { IDepartment } from 'src/model/department.model';

export async function getDepartments(): Promise<Array<IDepartment>> {
  try {
    return await http.get('department/me', {}).json();
  } catch (error) {
    // return catchError(error);
    return null as any;
  }
}
