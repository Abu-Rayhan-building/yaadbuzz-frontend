import React, { useEffect } from 'react';
import { Col, Row, Spin } from 'antd';

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

  return (
    <Container>
      <Spin indicator={<SpinIndicator />} spinning={status === Status.Pending}>
        <Row align="middle" gutter={[16, 16]}>
          {value && value.map(renderItem)}
          <NewDepartment />
        </Row>
      </Spin>
    </Container>
  );
}

export default Dashboard;
