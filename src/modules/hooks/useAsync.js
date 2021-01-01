import { useCallback, useEffect, useState } from 'react';

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error',
};

export default function useAsync(asyncFunction, {
  immediate = false,
  defaultValue = null,
  defaultError = null,
} = {}) {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(defaultError);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback((...args) => {
    setStatus(STATUS.PENDING);
    setValue(defaultValue);
    setError(defaultError);

    return asyncFunction(...args)
      .then((response) => {
        setValue(response);
        setStatus(STATUS.SUCCESS);
      })
      .catch((newError) => {
        setError(newError);
        setStatus(STATUS.ERROR);
      });
  }, [asyncFunction]);

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    execute,
    status,
    value,
    error,
  };
}
