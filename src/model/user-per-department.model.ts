import { ITopicVote } from './topic-vote.model';
import { IPicture } from './picture.model';
import { IUser } from './user.model';
import { IDepartment } from './department.model';
import { ITopic } from './topic.model';
import { IMemory } from './memory.model';

export interface IUserPerDepartment {
  id?: number;
  nickname?: string;
  bio?: string;
  topicAssigneds?: ITopicVote[];
  avatar?: IPicture;
  realUser?: IUser;
  department?: IDepartment;
  topicsVoteds?: ITopic[];
  tagedInMemoeries?: IMemory[];
}

export const defaultValue: Readonly<IUserPerDepartment> = {};
