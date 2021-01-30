import React, { useCallback, useMemo, useState } from 'react';
import { Card, Tooltip } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IMemory } from '../../../model/memory.model';

function Memory({ id, baseComment, title }: IMemory): JSX.Element {
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
    title,
    path: `/${id}/join`,
  });

  return (
    <Card
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
      <Card.Meta
        title={<Link to={`/department/${id}`}>{baseComment?.text}</Link>}
      />
    </Card>
  );
}

Memory.defaultProps = {
  avatar: {},
  name: null,
  password: null,
};

export default Memory;
