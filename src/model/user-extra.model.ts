import { IUser } from './user.model';
import { IUserPerDepartment } from './user-per-department.model';

export interface IUserExtra {
  id?: number;
  phone?: string;
  user?: IUser;
  defaultUserPerDepartment?: IUserPerDepartment;
}

export const defaultValue: Readonly<IUserExtra> = {};
