import React, { useEffect } from 'react';
import { Button, Col, Row, Spin } from 'antd';

import Container from 'src/components/Container';
import useAsyncCallback, { Status } from 'src/hooks/useAsyncCallback';
import SpinIndicator from 'src/components/SpinIndicator';

import * as http from 'src/services/http';
import Memory from './components/Memory';
import NewMemory from './components/NewMemory';
import Memorials from './components/Memorials';
import Characteristics from './components/Characteristics';
import Topics from './components/Topics';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import Stats from './components/Stats';
import { IMemory } from '../../model/memory.model';

function renderCol(children: React.ReactNode, key?: number) {
  return (
    <Row key={key} align="middle" gutter={[16, 16]}>
      {children}
    </Row>
  );
}

function renderItem(memory: IMemory) {
  const { id } = memory;

  return renderCol(<Memory {...memory} />, id);
}

function Department(): JSX.Element {
  const { status, value, execute: getDepartmentMemoriies } = useAsyncCallback(
    http.Others.getDepartmentMemoriies
  );

  // fuck
  const depId = window.location.pathname.split('/')[2];

  // fuck. plz correct this if nessecery
  useEffect(() => {
    getDepartmentMemoriies(depId);
  }, [getDepartmentMemoriies]);
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <Container>
      <Spin indicator={<SpinIndicator />} spinning={status === Status.Pending}>
        <Row align="middle" gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            {
              <>
                <Button
                  type="primary"
                  size="large"
                  shape="round"
                  icon={<PlusOutlined />}
                  onClick={() => history.push('/getbook')}
                >
                  {t('get the book')}
                </Button>
                {renderCol(<Memorials />)}
                {renderCol(<Characteristics />)}
                {renderCol(<Topics />)}
              </>
            }
          </Col>
          <Col xs={24} sm={12} md={8}>
            {value && (
              <>
                {renderCol(<NewMemory />)}
                {value.map(renderItem)}
              </>
            )}
          </Col>
          <Col xs={24} sm={12} md={8}>
            {<>{renderCol(<Stats depId={depId} />)}</>}
          </Col>
        </Row>
      </Spin>
    </Container>
  );
}

export default Department;
