import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Typography, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

import Container from '../../components/Container';

import Forms from './components/Forms';

import styles from './styles.module.less';

function Home(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Layout>
      <Container className={styles.container}>
        <Layout.Content className={styles.content}>
          <Row>
            <Col xs={24} lg={12} xl={15}>
              <Typography.Title>{t('Yaadbuzz')}</Typography.Title>
            </Col>
            <Col xs={24} lg={12} xl={9}>
              <Forms />
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer>&copy; {t('Yaadbuzz')}</Layout.Footer>
      </Container>
    </Layout>
  );
}

export default Home;
