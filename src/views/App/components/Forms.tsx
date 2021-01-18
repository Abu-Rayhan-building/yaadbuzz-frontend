import React, { useState } from 'react';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';

import Login from './Login';
import Register from './Register';

const TABS = {
  LOGIN: 'Login',
  REGISTER: 'Register',
};

const tabContents = {
  [TABS.LOGIN]: <Login />,
  [TABS.REGISTER]: <Register />,
};

function Forms(): JSX.Element {
  const [tabKey, setTabKey] = useState(TABS.REGISTER);
  const { t } = useTranslation();
  const tabList = [
    {
      key: TABS.REGISTER,
      tab: t(TABS.REGISTER),
    },
    {
      key: TABS.LOGIN,
      tab: t(TABS.LOGIN),
    },
  ];

  return (
    <Card tabList={tabList} activeTabKey={tabKey} onTabChange={setTabKey}>
      {tabContents[tabKey]}
    </Card>
  );
}

export default Forms;
