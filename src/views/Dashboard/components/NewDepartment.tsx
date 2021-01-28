import React, { useState } from 'react';
import { Button, Form, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { PlusOutlined } from '@ant-design/icons';

import styles from '../styles.module.less';

function NewDepartment(): JSX.Element {
  const { t } = useTranslation();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.newDepartment}>
      <Button
        type="primary"
        size="large"
        shape="round"
        icon={<PlusOutlined />}
        onClick={showModal}
      >
        {t('New Department')}
      </Button>
      <Modal
        title={t('New Department')}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* {status === Status.Success && (
          <Form.Item>
            <Alert
              message={t('Register successful!')}
              type="success"
              showIcon
            />
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
          name="register"
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
        </Form> */}
      </Modal>
    </div>
  );
}

export default NewDepartment;
