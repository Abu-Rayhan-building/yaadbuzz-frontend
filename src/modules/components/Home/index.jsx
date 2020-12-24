import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Typography,
  Row,
  Col,
} from 'antd';

import { withTranslation } from 'i18n';
import Container from 'modules/components/Container';

import Forms from './components/Forms';

import styles from './styles.module.less';

function Home({ t }) {
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
        <Layout.Footer>
          &copy;
          {' '}
          {t('Yaadbuzz')}
        </Layout.Footer>
      </Container>
    </Layout>
  );
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Home);
