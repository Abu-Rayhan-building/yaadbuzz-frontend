import { ITopicVote } from './topic-vote.model';
import { IDepartment } from './department.model';
import { IUserPerDepartment } from './user-per-department.model';

export interface ITopic {
  id?: number;
  title?: string;
  votes?: ITopicVote[];
  department?: IDepartment;
  voters?: IUserPerDepartment[];
}

export const defaultValue: Readonly<ITopic> = {};
