import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { withTranslation } from 'i18n';

import styles from '../styles.module.less';

function NewDepartment({ t }) {
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
        
      </Modal>
    </div>
  );
}

NewDepartment.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(NewDepartment);
