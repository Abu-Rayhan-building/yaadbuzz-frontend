import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.less';

function Container({
  as: As = 'div',
  className,
  children,
  ...props
}: {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <As className={classNames(styles.container, className)} {...props}>
      {children}
    </As>
  );
}

export default Container;
