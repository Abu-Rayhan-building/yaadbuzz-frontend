import ky from 'ky';

import { DepartmentForm, IDepartment } from 'src/model/department.model';
import { IMemory } from 'src/model/memory.model';
import {
  IUser,
  LoginForm,
  RegisterForm,
  ResetPasswordForm,
  ActivationForm,
} from 'src/model/user.model';

import { apiUrlDev, apiUrlProd, isDev } from 'src/configs';

const http = ky.create({
  // fuck this is needed for cookies
  credentials: 'include',
  prefixUrl: isDev ? `${apiUrlDev}api` : `${apiUrlProd}api`,
});

export const Auth = {
  register(values: RegisterForm): Promise<unknown> {
    try {
      return http.post('register', {
        json: {
          langKey: 'en',
          ...values,
        },
      });
    } catch (error) {
      return transformError(error);
    }
  },

  login(values: LoginForm): Promise<unknown> {
    try {
      return http
        .post('authenticate', {
          json: values,
        })
        .json();
    } catch (error) {
      return transformError(error);
    }
  },

  resetPassword({ email }: ResetPasswordForm): Promise<unknown> {
    try {
      return http.post('account/reset-password/init', {
        body: email,
      });
    } catch (error) {
      return transformError(error);
    }
  },

  activate(values: ActivationForm): Promise<unknown> {
    return http.get(`activate?key=${values.activationKey}`, {});
  },

  getUser(): Promise<IUser> {
    return http.get('account').json();
  },
};

export const Department = {
  getAll(): Promise<IDepartment[]> {
    try {
      return http.get('department/me').json();
    } catch (error) {
      return transformError(error);
    }
  },

  add(values: DepartmentForm): Promise<unknown> {
    try {
      return http.post('department/create', {
        json: {
          departmentCreateUDTO: values,
        },
      });
    } catch (error) {
      return transformError(error);
    }
  },
};

export const Others = {
  getMyStats(depId: string): Promise<IMyStats> {
    return http.get(`department/${depId}/my-stats`, {}).json();
  },

  getDepartmentMemoriies(depId: string): Promise<IMemory[]> {
    return http.get(`department/${depId}/memories`, {}).json();
  },

  createMemory(depId: string, memory: IMemory): Promise<IMemory> {
    return http
      .post(`department/${depId}/memory`, {
        json: memory,
      })
      .json();
  },
};

export interface IMyStats {
  topicsNotVotedYet: Array<number>;
  userPerDepartmentNotWritedMemoryFor: Array<number>;
}

async function transformError(error: unknown): Promise<any> {
  if (!(error instanceof http.HTTPError)) {
    throw 'error.connectionError';
  }

  const { message } = await error.response.json();
  throw message;
}
