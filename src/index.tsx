import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import faIR from 'antd/lib/locale/fa_IR';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import 'src/styles/globals.less';

import reportWebVitals from './reportWebVitals';
import './i18n';
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider direction="rtl" locale={faIR}>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} component={component} exact />
          ))}
        </Switch>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
