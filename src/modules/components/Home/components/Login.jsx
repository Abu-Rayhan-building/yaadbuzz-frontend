import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
} from 'antd';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { withTranslation } from 'i18n';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: {
    xs: { offset: 0, span: 24 },
    md: { offset: 6, span: 6 },
  },
};

function Login({ t }) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      validateTrigger="blur"
      name="login"
      requiredMark={false}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={t('Username')}
        name="username"
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
        <Button block type="primary" htmlType="submit">
          {t('Login')}
        </Button>
      </Form.Item>
    </Form>
  );
}

Login.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Login);
