import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.less';

function Container({ as: As, className, ...props }) {
  return (
    <As
      className={classNames(styles.container, className)}
      {...props}
    />
  );
}

export default Container;
