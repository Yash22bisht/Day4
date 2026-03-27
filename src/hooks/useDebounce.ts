import { useState, useEffect } from "react";

export default function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
}
