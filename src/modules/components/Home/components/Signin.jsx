import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
  Alert,
} from 'antd';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';

import useAsync, { STATUS } from 'modules/hooks/useAsync';
import { withTranslation } from 'i18n';

import helperStyles from 'styles/helpers.module.less';

import * as requests from '../requests';

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

function Signin({ t }) {
  const {
    execute: handleFinish,
    status,
    error,
  } = useAsync(requests.signin, false);

  return (
    <>
      {status === STATUS.SUCCESS && (
        <Alert
          className={helperStyles.bottomMargined}
          message={t('Signin successful!')}
          type="success"
          showIcon
        />
      )}
      {status === STATUS.ERROR && (
        <Alert
          className={helperStyles.bottomMargined}
          message={t(error)}
          type="error"
          showIcon
        />
      )}
      <Form
        {...layout}
        validateTrigger="onBlur"
        name="login"
        requiredMark={false}
        onFinish={handleFinish}
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
            block
            type="primary"
            htmlType="submit"
            loading={status === STATUS.PENDING}
          >
            {t('Sign In')}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

Signin.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Signin);
