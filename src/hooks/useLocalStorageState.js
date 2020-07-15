import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (e) {
      val = defaultValue;
    }
    return val;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
export default useLocalStorageState;
