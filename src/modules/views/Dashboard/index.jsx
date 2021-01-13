import React, { useEffect } from 'react';
import { Col, Row, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { withTranslation } from 'i18n';
import Container from 'modules/components/Container';
import useAsync, { STATUS } from 'modules/hooks/useAsync';

import * as requests from './requests';
import Department from './components/Department';
import NewDepartment from './components/NewDepartment';

function renderCol(children, key) {
  return (
    <Col key={key} xs={24} sm={12} md={8}>
      {children}
    </Col>
  );
}

function renderItem(props) {
  const { id } = props;

  return renderCol(<Department {...props} />, id);
}

function Dashboard() {
  const {
    status,
    value,
    execute: getDepartments,
  } = useAsync(requests.getDepartments);

  useEffect(() => {
    getDepartments();
  }, [getDepartments]);

  return (
    <Container>
      <Spin
        indicator={(
          <LoadingOutlined style={{ fontSize: 24 }} />
        )}
        spinning={status === STATUS.PENDING}
      >
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

export default withTranslation()(Dashboard);
