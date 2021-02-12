import * as http from 'src/services/http';
import { IUser } from 'src/model/user.model';
interface AuthService {
  getUser: () => Promise<IUser | null>;
  refreshUser: () => Promise<IUser | null>;
  isLoggedIn: () => boolean;
}

function authFacory(): AuthService {
  let user: IUser | null = null;
  let isLoggedIn: boolean | null = null;

  async function refreshUser() {
    try {
      user = await http.Auth.getUser();
      isLoggedIn = true;
    } catch (e) {
      isLoggedIn = false;
    }
    return user;
  }

  async function getUser() {
    if (typeof isLoggedIn === 'boolean') {
      return user;
    }

    await refreshUser();
    return user;
  }

  return {
    getUser,
    refreshUser,
    isLoggedIn() {
      return Boolean(isLoggedIn);
    },
  };
}

const { getUser, isLoggedIn, refreshUser } = authFacory();

export { getUser, isLoggedIn, refreshUser };
