import { IComment } from './comment.model';
import { IUserPerDepartment } from './user-per-department.model';
import { IDepartment } from './department.model';

export interface IMemorial {
  id?: number;
  anonymousComment?: IComment;
  notAnonymousComment?: IComment;
  writer?: IUserPerDepartment;
  recipient?: IUserPerDepartment;
  department?: IDepartment;
}

export const defaultValue: Readonly<IMemorial> = {};
