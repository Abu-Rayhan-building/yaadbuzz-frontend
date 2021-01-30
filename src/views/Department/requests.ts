import http from 'src/services/http';
import { IMemory } from '../../model/memory.model';

export async function getMyStats(depId: string): Promise<IMyStats> {
  try {
    return await http.get(`department/${depId}/my-stats`, {}).json();
  } catch (error) {
    // return catchError(error);
    return null as any;
  }
}

// fuck we should handle pagination in many endpoints
export async function getDepartmentMemoriies(
  depId: string
): Promise<Array<IMemory>> {
  try {
    return await http.get(`department/${depId}/memories`, {}).json();
  } catch (error) {
    // return catchError(error);
    return null as any;
  }
}

export async function createMemory(
  depId: string,
  memory: IMemory
): Promise<IMemory> {
  try {
    return await http
      .post(`department/${depId}/memory`, {
        json: memory,
      })
      .json();
  } catch (error) {
    // return catchError(error);
    return null as any;
  }
}

export interface IMyStats {
  topicsNotVotedYet: Array<number>;
  userPerDepartmentNotWritedMemoryFor: Array<number>;
}
