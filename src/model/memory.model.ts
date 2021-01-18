import { IComment } from './comment.model';
import { IUserPerDepartment } from './user-per-department.model';
import { IDepartment } from './department.model';

export interface IMemory {
  id?: number;
  title?: string;
  isPrivate?: boolean;
  comments?: IComment[];
  baseComment?: IComment;
  writer?: IUserPerDepartment;
  tageds?: IUserPerDepartment[];
  department?: IDepartment;
}

export const defaultValue: Readonly<IMemory> = {
  isPrivate: false,
};
