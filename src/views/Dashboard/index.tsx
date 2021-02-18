import React, { useEffect } from 'react';
import { Col, Layout, Row, Spin, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import * as http from 'src/services/http';
import Container from 'src/components/Container';
import useAsyncCallback, { Status } from 'src/hooks/useAsyncCallback';
import { IDepartment } from 'src/model/department.model';
import SpinIndicator from 'src/components/SpinIndicator';

import Department from './components/Department';
import NewDepartment from './components/NewDepartment';

function renderItem(department: IDepartment) {
  const { id } = department;

  return (
    <Col key={id} xs={24} sm={12} md={8}>
      <Department {...department} />
    </Col>
  );
}

function Dashboard(): JSX.Element {
  const { status, value, execute: getDepartments } = useAsyncCallback(
    http.Department.getAll
  );

  useEffect(() => {
    getDepartments();
  }, [getDepartments]);

  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <Layout.Content>
          <Typography.Title>{t('Yaadbuzz')}</Typography.Title>
          <Spin
            indicator={<SpinIndicator />}
            spinning={status === Status.Pending}
          >
            <Row align="middle" gutter={[16, 16]}>
              {value && value.map(renderItem)}
              <Col span={24}>
                <NewDepartment />
              </Col>
            </Row>
          </Spin>
        </Layout.Content>
      </Container>
    </Layout>
  );
}

export default Dashboard;
