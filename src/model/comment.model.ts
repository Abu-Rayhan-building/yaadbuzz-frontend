import { IPicture } from './picture.model';
import { IUserPerDepartment } from './user-per-department.model';
import { IMemory } from './memory.model';

export interface IComment {
  id?: number;
  text?: string;
  pictures?: IPicture[];
  writer?: IUserPerDepartment;
  memory?: IMemory;
}

export const defaultValue: Readonly<IComment> = {};
