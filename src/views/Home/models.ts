export type RegisterForm = {
  login: string;
  email: string;
  password: string;
};

export type LoginForm = {
  login: string;
  password: string;
};

export interface ResetPasswordForm {
  email: string;
}
