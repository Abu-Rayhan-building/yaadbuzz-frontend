import React from 'react';
import PropTypes from 'prop-types';
import App from 'next/app';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/fa_IR';

import { appWithTranslation } from 'i18n';

import 'styles/globals.less';

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider locale={locale} direction="rtl">
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default appWithTranslation(MyApp);
