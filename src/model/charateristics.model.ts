import { IUserPerDepartment } from './user-per-department.model';

export interface ICharateristics {
  id?: number;
  title?: string;
  repetation?: number;
  userPerDepartment?: IUserPerDepartment;
}

export const defaultValue: Readonly<ICharateristics> = {};
