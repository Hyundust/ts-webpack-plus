import { useCallback } from "react";
import { useRef } from "react";

export function useThrottle(callback: (...argument:any[]) => void, delay: number) {
  // Create a ref to keep track of whether the callback is currently being throttled
  const throttleRef = useRef(false);

  // Define the throttled version of the callback using useCallback
  return useCallback((...argument:any[]) => {
    // If the throttleRef.current is false (not currently throttling), execute the callback and set throttleRef.current to true
    if (!throttleRef.current) {
      callback(...argument);
      throttleRef.current = true;

      // After the specified delay, set throttleRef.current back to false
      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
}
