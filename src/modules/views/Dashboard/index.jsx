import React, { useEffect, useCallback } from 'react';
import { List } from 'antd';

import { withTranslation } from 'i18n';
import Container from 'modules/components/Container';
import useAsync from 'modules/hooks/useAsync';

import * as requests from './requests';
import Department from './components/Department';

const skeletonDepartments = new Array(6).fill(null).map((_, index) => ({
  avatar: undefined,
  id: index,
  name: undefined,
  password: null,
}));

function Dashboard() {
  const {
    value,
    execute: getDepartments,
  } = useAsync(requests.getDepartments, { defaultValue: skeletonDepartments });

  useEffect(() => {
    getDepartments();
  }, [getDepartments]);

  return (
    <Container>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        rowKey="id"
        dataSource={value}
        renderItem={useCallback((props) => <Department {...props} />, [])}
      />
    </Container>
  );
}

export default withTranslation()(Dashboard);
