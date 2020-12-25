import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'i18n';
import { Card } from 'antd';

import Signin from './Signin';
import Signup from './Signup';

const TABS = {
  SIGNIN: 'Sign In',
  SIGNUP: 'Sign Up',
};

const tabContents = {
  [TABS.SIGNIN]: <Signin />,
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
      key: TABS.SIGNIN,
      tab: t(TABS.SIGNIN),
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
