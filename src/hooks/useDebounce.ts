import { useCallback, useRef } from 'react';

export const useDebounce = <T extends any[]>(
  cb: (...args: T) => void,
  delay: number,
) => {
  const timerRef = useRef<NodeJS.Timeout>();
  return useCallback(
    (...args: T) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        cb(...args);
      }, delay);
    },
    [delay],
  );
};
