import React, { useCallback, useRef, useState } from 'react';
import { Alert, Button, Form, FormInstance, Input, Modal, Upload } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  PlusOutlined,
  FormOutlined,
  LockOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

import { DepartmentForm } from 'src/model/department.model';
import * as http from 'src/services/http';
import useAsyncCallback, { Status } from 'src/hooks/useAsyncCallback';
import { getBase64 } from 'src/utils/image';
import { departmentAvatar } from 'src/services/picture-url';

import styles from '../styles.module.less';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

function NewDepartment(): JSX.Element {
  const { t } = useTranslation();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const formRef = useRef<FormInstance>(null);

  const handleOk = useCallback(() => {
    if (formRef.current) {
      formRef.current.submit();
    }
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { execute: handleFinish, status, error } = useAsyncCallback<
    [DepartmentForm],
    unknown
  >(http.Department.add);

  const [imageUrl, setImageUrl] = useState<string>();
  const [uploading, setUploading] = useState<boolean>();

  const uploadButton = (
    <div>
      {uploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>{t('Upload')}</div>
    </div>
  );

  const handleChange = useCallback((info) => {
    if (info.file.status === 'uploading') {
      setUploading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (newImageUrl) => {
        if (typeof newImageUrl !== 'string') {
          return;
        }
        setImageUrl(newImageUrl);
        setUploading(false);
      });
    }
  }, []);

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
        {status === Status.Success && (
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
          name="newDepartment"
          requiredMark={false}
          onFinish={handleFinish}
          size="large"
          ref={formRef}
        >
          <Form.Item label={t('Picture')} name="picture">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              onChange={handleChange}
              action={departmentAvatar()}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>

          <Form.Item label={t('Name')} name="name" rules={[{ required: true }]}>
            <Input prefix={<FormOutlined />} />
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
        </Form>
      </Modal>
    </div>
  );
}

export default NewDepartment;
