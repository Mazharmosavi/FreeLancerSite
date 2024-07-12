import { useEffect } from "react";
import { useState } from "react";
import { set } from "react-hook-form";

export function useLocalStorgeState(key, initialState) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
}
