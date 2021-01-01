import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  List,
  Skeleton,
  Tooltip,
} from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import debounce from 'lodash.debounce';
import Link from 'next/link';

import { withTranslation } from 'i18n';

function Department({
  t,
  avatar: {
    address: avatarAddress,
    id: avatarId,
  },
  id,
  name,
  password,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopiedEnd = useMemo(
    () => debounce(() => setCopied(false), 2000),
    [],
  );

  const handleCopied = useCallback(
    () => {
      setCopied(true);

      handleCopiedEnd.cancel();
      handleCopiedEnd();
    },
    [handleCopiedEnd],
  );

  const shareText = t('Shared department', {
    name,
    path: `/${id}/join`,
    password,
  });

  return (
    <List.Item>
      <Card
        cover={(
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        )}
        actions={id === null ? null : [
          (
            <Tooltip
              title={copied ? t('Copied!') : t('Share')}
              trigger="hover"
              key="link"
            >
              <CopyToClipboard text={shareText} onCopy={handleCopied}>
                <ShareAltOutlined />
              </CopyToClipboard>
            </Tooltip>
          ),
        ]}
      >
        <Card.Meta
          title={(
            <Skeleton
              title={{ width: '69%' }}
              paragraph={false}
              loading={!name}
            >
              <Link href={`/${id}`}>{name}</Link>
            </Skeleton>
          )}
        />
      </Card>
    </List.Item>
  );
}

Department.propTypes = {
  t: PropTypes.func.isRequired,
  avatar: PropTypes.shape({
    address: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  name: PropTypes.string,
  password: PropTypes.string,
};

Department.defaultProps = {
  avatar: {},
  name: null,
  password: null,
};

export default withTranslation()(Department);
