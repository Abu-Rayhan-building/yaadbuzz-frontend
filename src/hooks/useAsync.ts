import { useCallback, useState } from 'react';

export enum Status {
  Idle,
  Pending,
  Success,
  Error,
}

export default function useAsyncCallback<
  ArgsType extends Array<any>,
  ValueType
>(
  asyncFunction: (...args: ArgsType) => Promise<ValueType>,
  {
    defaultValue = null,
    defaultError = null,
  }: {
    defaultValue?: ValueType | null;
    defaultError?: any;
  } = {}
): {
  execute: (...args: ArgsType) => Promise<ValueType | null>;
  status: Status;
  value: ValueType | null;
  error: any;
} {
  const [status, setStatus] = useState<Status>(Status.Idle);
  const [value, setValue] = useState<ValueType | null>(defaultValue);
  const [error, setError] = useState<any>(defaultError);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(
    async (...args: ArgsType): Promise<ValueType | null> => {
      setStatus(Status.Pending);
      setValue(defaultValue);
      setError(defaultError);

      try {
        const newValue = await asyncFunction(...args);
        setValue(newValue);
        setStatus(Status.Success);
        return newValue;
      } catch (newError) {
        setError(newError);
        setStatus(Status.Error);
        throw newError;
      }
    },
    [asyncFunction]
  );

  return {
    execute,
    status,
    value,
    error,
  };
}
