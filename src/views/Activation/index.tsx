import React, { useEffect, useState } from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import Container from 'src/components/Container';

import * as http from 'src/services/http';
import FullPageSpin from 'src/components/FullPageSpin';
import useAsyncCallback from 'src/hooks/useAsyncCallback';

import styles from './styles.module.less';
import { ActivationForm } from 'src/model/user.model';

function Home(): JSX.Element {
  const { execute: handleFinish } = useAsyncCallback<[ActivationForm], unknown>(
    http.Auth.activate
  );
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    handleFinish({
      activationKey: window.location.search.split('?key=')[1],
    }).then(() => {
      setLoading(false);
      // fuck this should be changed so user can find out he is activated
      history.push('/');
    });
  }, []);
  if (loading) {
    return <FullPageSpin />;
  }

  // fuck change this plz
  return (
    <Layout>
      <Container className={styles.container}>
        <Layout.Content className={styles.content}>
          <Row>
            <Col xs={24} lg={12} xl={15}>
              <Typography.Title>{t('Yaadbuzz')}</Typography.Title>
            </Col>
            <Col xs={24} lg={12} xl={9}></Col>
          </Row>
        </Layout.Content>
        <Layout.Footer>&copy; {t('Yaadbuzz')}</Layout.Footer>
      </Container>
    </Layout>
  );
}

export default Home;
