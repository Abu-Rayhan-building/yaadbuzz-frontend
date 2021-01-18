import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  LockOutlined,
  MailOutlined,
  RightOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router';

import useAsyncCallback, { Status } from 'src/hooks/useAsyncCallback';

import * as requests from '../requests';
import { LoginForm, ResetPasswordForm } from '../models';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: {
    xs: { offset: 0, span: 24 },
    sm: { offset: 6, span: 8 },
  },
};

function Login(): JSX.Element {
  const {
    execute: handleLoginFinish,
    status: loginStatus,
    error: loginError,
  } = useAsyncCallback<[LoginForm], unknown>(requests.login);

  const {
    execute: handleResetFinish,
    status: resetStatus,
    error: resetError,
  } = useAsyncCallback<[ResetPasswordForm], unknown>(requests.resetPassword);

  const { t } = useTranslation();

  const history = useHistory();

  useEffect(() => {
    if (loginStatus === Status.Success) {
      console.log(history);
      history.push('/dashboard');
    }
  }, [loginStatus, history]);

  const [isResettingPassword, setResettingPassword] = useState(false);

  if (isResettingPassword) {
    return (
      <>
        <Form.Item>
          <Button
            type="link"
            icon={<RightOutlined />}
            onClick={() => setResettingPassword(false)}
          >
            {t('Return')}
          </Button>
        </Form.Item>
        {resetStatus === Status.Success && (
          <Form.Item>
            <Alert message={t('Reset email sent!')} type="success" showIcon />
          </Form.Item>
        )}
        {resetStatus === Status.Error && (
          <Form.Item>
            <Alert message={t(resetError)} type="error" showIcon />
          </Form.Item>
        )}
        <Form
          {...layout}
          validateTrigger="onBlur"
          name="resetPassword"
          requiredMark={false}
          onFinish={handleResetFinish}
          size="large"
        >
          <Form.Item
            label={t('Email')}
            name="email"
            rules={[
              {
                type: 'email',
                message: t('error.emailType'),
              },
              {
                required: true,
              },
            ]}
          >
            <Input prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              block
              type="primary"
              htmlType="submit"
              loading={resetStatus === Status.Pending}
            >
              {t('Reset password')}
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }

  return (
    <>
      {loginStatus === Status.Success && (
        <Form.Item>
          <Alert message={t('Login successful!')} type="success" showIcon />
        </Form.Item>
      )}
      {loginStatus === Status.Error && (
        <Form.Item>
          <Alert message={t(loginError)} type="error" showIcon />
        </Form.Item>
      )}
      <Form
        {...layout}
        validateTrigger="onBlur"
        name="login"
        requiredMark={false}
        onFinish={handleLoginFinish}
        size="large"
      >
        <Form.Item
          name="username"
          label={t('Username')}
          rules={[{ required: true }]}
        >
          <Input prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          label={t('Password')}
          name="password"
          rules={[
            {
              required: true,
            },
            {
              min: 5,
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            onClick={() => setResettingPassword(true)}
            size="small"
            type="link"
          >
            {t('Reset password')}
          </Button>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            block
            type="primary"
            htmlType="submit"
            loading={loginStatus === Status.Pending}
          >
            {t('Login')}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Login;
