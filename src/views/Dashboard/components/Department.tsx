import React, { useCallback, useMemo, useState } from 'react';
import { Card, Tooltip } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IDepartment } from 'src/model/department.model';
import { departmentAvatar } from 'src/services/picture-url';

function Department({ id, name, password }: IDepartment): JSX.Element {
  const [copied, setCopied] = useState(false);

  const { t } = useTranslation();

  const handleCopiedEnd = useMemo(
    () => debounce(() => setCopied(false), 2000),
    []
  );

  const handleCopied = useCallback(() => {
    setCopied(true);

    handleCopiedEnd.cancel();
    handleCopiedEnd();
  }, [handleCopiedEnd]);

  const shareText = t('Shared department', {
    name,
    path: `/${id}/join`,
    password,
  });

  const avatarAddress = typeof id === 'number' ? departmentAvatar(id) : '';
  return (
    <Card
      cover={avatarAddress && <img alt={name} src={avatarAddress} />}
      actions={[
        <Tooltip
          title={copied ? t('Copied!') : t('Share')}
          trigger="hover"
          key="link"
        >
          <CopyToClipboard text={shareText} onCopy={handleCopied}>
            <ShareAltOutlined />
          </CopyToClipboard>
        </Tooltip>,
      ]}
    >
      <Card.Meta title={<Link to={`/department/${id}`}>{name}</Link>} />
    </Card>
  );
}

Department.defaultProps = {
  avatar: {},
  name: null,
  password: null,
};

export default Department;
