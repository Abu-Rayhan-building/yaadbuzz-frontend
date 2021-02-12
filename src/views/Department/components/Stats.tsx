import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Card } from 'antd';
import debounce from 'lodash.debounce';
import { useTranslation } from 'react-i18next';

import * as http from 'src/services/http';
import useAsyncCallback from 'src/hooks/useAsyncCallback';

function Stats({ depId }: { depId: string }): JSX.Element {
  const [copied, setCopied] = useState(false);

  const { status, value, execute: getMyStats } = useAsyncCallback(
    http.Others.getMyStats
  );

  useEffect(() => {
    getMyStats(depId);
  }, [getMyStats]);
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
    value: value?.topicsNotVotedYet,
    path: ``,
  });
  return (
    <>
      <Card>
        <Card.Meta
          title={value?.topicsNotVotedYet.map((vid: number) => {
            return t('topicsNotVotedYet', {
              value: vid,
              path: ``,
            });
          })}
        />
      </Card>
      <Card>
        <Card.Meta
          title={value?.userPerDepartmentNotWritedMemoryFor.map(
            (vid: number) => {
              return t('userPerDepartmentNotWritedMemoryFor', {
                value: vid,
                path: ``,
              });
            }
          )}
        />
      </Card>
    </>
  );
}

export default Stats;
