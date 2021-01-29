import http from 'src/services/http';
import { LoginForm, RegisterForm, ResetPasswordForm } from './models';

async function catchError(error: unknown): Promise<never> {
  if (!(error instanceof http.HTTPError)) {
    return Promise.reject('error.connectionError');
  }

  const { message } = await error.response.json();
  return await Promise.reject(message);
}

export async function register(values: RegisterForm): Promise<unknown> {
  try {
    return http.post('register', {
      json: {
        langKey: 'en',
        ...values,
      },
    });
  } catch (error) {
    return catchError(error);
  }
}
export async function login(values: LoginForm): Promise<unknown> {
  try {
    await http
      .post('authenticate', {
        json: values,
      })
      .json();
  } catch (error) {
    return catchError(error);
  }
}
export async function resetPassword({
  email,
}: ResetPasswordForm): Promise<unknown> {
  try {
    return http.post('account/reset-password/init', {
      body: email,
    });
  } catch (error) {
    return catchError(error);
  }
}
