import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'i18n';
import { Card } from 'antd';

import Login from './Login';
import Signup from './Signup';

const TABS = {
  LOGIN: 'Login',
  SIGNUP: 'Sign Up',
};

const tabContents = {
  [TABS.LOGIN]: <Login />,
  [TABS.SIGNUP]: <Signup />,
};

function Forms({ t }) {
  const [tabKey, setTabKey] = useState(TABS.SIGNUP);
  const tabList = [
    {
      key: TABS.SIGNUP,
      tab: t(TABS.SIGNUP),
    },
    {
      key: TABS.LOGIN,
      tab: t(TABS.LOGIN),
    },
  ];

  return (
    <Card
      tabList={tabList}
      activeTabKey={tabKey}
      onTabChange={setTabKey}
    >
      {tabContents[tabKey]}
    </Card>
  );
}

Forms.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Forms);
