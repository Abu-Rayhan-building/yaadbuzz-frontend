import React, { useEffect, useState } from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import Container from 'src/components/Container';
import * as auth from 'src/services/auth';

import Forms from './components/Forms';

import styles from './styles.module.less';
import FullPageSpin from 'src/components/FullPageSpin';

function Home(): JSX.Element {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    auth.getUser().then(() => {
      if (auth.isLoggedIn()) {
        history.push('/dashboard');
        return;
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <FullPageSpin />;
  }

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
