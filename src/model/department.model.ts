import { IUserPerDepartment } from './user-per-department.model';
import { IMemory } from './memory.model';
import { IPicture } from './picture.model';
import { IUser } from './user.model';

export interface IDepartment {
  id?: number;
  name?: string;
  password?: string;
  userPerDepartments?: IUserPerDepartment[];
  memories?: IMemory[];
  avatar?: IPicture;
  owner?: IUser;
}

export const defaultValue: Readonly<IDepartment> = {};
