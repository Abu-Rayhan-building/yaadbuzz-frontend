import React, { useEffect } from 'react';
import { Col, Row, Spin } from 'antd';

import Container from 'src/components/Container';
import useAsyncCallback, { Status } from 'src/hooks/useAsyncCallback';
import { IDepartment } from 'src/model/department.model';
import SpinIndicator from 'src/components/SpinIndicator';

import * as requests from './requests';
import Department from './components/Department';
import NewDepartment from './components/NewDepartment';

function renderCol(children: React.ReactNode, key?: number) {
  return (
    <Col key={key} xs={24} sm={12} md={8}>
      {children}
    </Col>
  );
}

function renderItem(department: IDepartment) {
  const { id } = department;

  return renderCol(<Department {...department} />, id);
}

function Dashboard(): JSX.Element {
  const { status, value, execute: getDepartments } = useAsyncCallback(
    requests.getDepartments
  );

  useEffect(() => {
    getDepartments();
  }, [getDepartments]);

  return (
    <Container>
      <Spin indicator={<SpinIndicator />} spinning={status === Status.Pending}>
        <Row align="middle" gutter={[16, 16]}>
          {value && (
            <>
              {value.map(renderItem)}
              {renderCol(<NewDepartment />)}
            </>
          )}
        </Row>
      </Spin>
    </Container>
  );
}

export default Dashboard;
