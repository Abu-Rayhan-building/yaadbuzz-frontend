import React from 'react';
import { Spin } from 'antd';
import SpinIndicator from '../SpinIndicator';

function FullPageSpin(): JSX.Element {
  return <Spin indicator={<SpinIndicator />} />;
}

export default FullPageSpin;
