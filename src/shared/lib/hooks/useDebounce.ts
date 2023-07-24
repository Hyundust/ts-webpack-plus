import { MutableRefObject, useCallback, useRef } from "react";

// This custom hook is called 'useDebounce' and takes two parameters:
// 1. 'callback': The function that needs to be debounced.
// 2. 'delay': The time duration in milliseconds to wait before invoking the 'callback'.

export function useDebounce(callback: (...args: any[]) => void, delay: number) {

  // Create a ref using 'useRef' to keep track of whether the callback is currently being debounced.
  // The 'timer' ref will hold the reference to the setTimeout timer.
  const timer = useRef<ReturnType<typeof setTimeout>>();

  // Define the debounced version of the callback using 'useCallback'.
  // The debounced callback will be returned by this hook and can be used by the component.
  // The debounced callback will be invoked only when a certain 'delay' has passed since the last time
  // the hook is called. If the hook is called again before the 'delay' period is over, the previous
  // 'setTimeout' timer will be cleared and a new 'setTimeout' will be set up to wait for the updated delay.
  return useCallback(
    (...args: any[]) => {
      // If there is an existing 'setTimeout' timer (indicating that the callback is already being debounced),
      // clear it to prevent it from being invoked.
      if (timer.current) {
        clearTimeout(timer.current);
      }

      // Set up a new 'setTimeout' timer to invoke the 'callback' after the specified 'delay'.
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    // The dependency array for the 'useCallback' hook includes 'callback' and 'delay'.
    // This ensures that the debounced callback is recreated only if either 'callback' or 'delay' changes,
    // and it won't create a new debounced callback on every render.
    [callback, delay]
  );
}
