import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  LockOutlined,
  MailOutlined,
  RightOutlined,
  UserOutlined,
} from '@ant-design/icons';

import useAsync, { Status } from '../../../hooks/useAsync';

import * as requests from '../requests';

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

function Signin(): JSX.Element {
  const {
    execute: handleSigninFinish,
    status: signinStatus,
    error: signinError,
  } = useAsync(requests.login);

  const {
    execute: handleResetFinish,
    status: resetStatus,
    error: resetError,
  } = useAsync(requests.resetPassword);

  const { t } = useTranslation();

  // const router = useRouter();

  // useEffect(() => {
  //   if (signinStatus === STATUS.SUCCESS) {
  //     router.push('/dashboard');
  //   }
  // }, [signinStatus, router]);

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
      {signinStatus === Status.Success && (
        <Form.Item>
          <Alert message={t('Signin successful!')} type="success" showIcon />
        </Form.Item>
      )}
      {signinStatus === Status.Error && (
        <Form.Item>
          <Alert message={t(signinError)} type="error" showIcon />
        </Form.Item>
      )}
      <Form
        {...layout}
        validateTrigger="onBlur"
        name="login"
        requiredMark={false}
        onFinish={handleSigninFinish}
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
            loading={signinStatus === Status.Pending}
          >
            {t('Sign In')}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Signin;
