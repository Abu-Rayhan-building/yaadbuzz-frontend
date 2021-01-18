import { ITopic } from './topic.model';
import { IUserPerDepartment } from './user-per-department.model';

export interface ITopicVote {
  id?: number;
  repetitions?: number;
  topic?: ITopic;
  user?: IUserPerDepartment;
}

export const defaultValue: Readonly<ITopicVote> = {};
