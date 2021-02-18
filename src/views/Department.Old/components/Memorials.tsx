import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { PlusOutlined } from '@ant-design/icons';

import styles from '../styles.module.less';

function NewMemory(): JSX.Element {
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
        {t('Memorials')}
      </Button>
      <Modal
        title={t('New Memory')}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </div>
  );
}

export default NewMemory;
