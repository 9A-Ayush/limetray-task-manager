import { useState, useEffect } from "react";

/**
 * Custom hook to synchronize React state with localStorage
 * This abstracts all localStorage read/write logic
 * and keeps components clean and focused on UI logic.
 *
 * @param {string} key - localStorage key name
 * @param {any} initialValue - default value if key does not exist
 */
export function useLocalStorage(key, initialValue) {
  // Lazy initialization to avoid reading localStorage on every render
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Fallback in case of corrupted data or JSON parse error
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  // Sync state changes back to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // Write errors should not crash the app
      console.error("Error setting localStorage key:", key, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
