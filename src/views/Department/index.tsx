import React, { useEffect } from 'react';
import { Button, Col, Mentions, Row, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

import Container from 'src/components/Container';
import * as http from 'src/services/http';
import useAsyncCallback, { Status } from 'src/hooks/useAsyncCallback';
import SpinIndicator from 'src/components/SpinIndicator';
import Avatar from 'antd/lib/avatar/avatar';

function Department(): JSX.Element {
  return (
    <Container>
      <Row>
        <Col xs={24} md={{ offset: 8, span: 16 }}>
          <Mentions
            autoSize={{ minRows: 3, maxRows: 6 }}
            placeholder="You can use @ to ref user here"
          >
            <Mentions.Option value="afc163">
              <Avatar /> afc163
            </Mentions.Option>
            <Mentions.Option value="zombieJ">
              <Avatar /> zombieJ
            </Mentions.Option>
            <Mentions.Option value="yesmeck">
              <Avatar /> yesmeck
            </Mentions.Option>
          </Mentions>
        </Col>
      </Row>
    </Container>
  );
}

export default Department;
