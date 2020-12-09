import React from 'react';
import PropTypes from 'prop-types';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/fa_IR';

import 'antd/dist/antd.less';
import 'styles/globals.scss';

function App({ Component, pageProps }) {
  return (
    <ConfigProvider locale={locale} direction="rtl">
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
