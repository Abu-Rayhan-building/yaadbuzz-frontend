import React from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

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

function Signup(): JSX.Element {
  const { execute: handleFinish, status, error } = useAsync(requests.register);
  const { t } = useTranslation();

  return (
    <>
      {status === Status.Success && (
        <Form.Item>
          <Alert message={t('Signup successful!')} type="success" showIcon />
        </Form.Item>
      )}
      {status === Status.Error && (
        <Form.Item>
          <Alert message={t(error)} type="error" showIcon />
        </Form.Item>
      )}
      <Form
        {...layout}
        validateTrigger="onBlur"
        name="signup"
        requiredMark={false}
        onFinish={handleFinish}
        size="large"
      >
        <Form.Item
          label={t('Username')}
          name="login"
          rules={[{ required: true }]}
        >
          <Input prefix={<UserOutlined />} />
        </Form.Item>

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
            block
            type="primary"
            htmlType="submit"
            loading={status === Status.Pending}
          >
            {t('Register')}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Signup;
