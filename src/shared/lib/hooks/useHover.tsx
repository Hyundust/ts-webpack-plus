import { useCallback, useMemo, useState } from "react";

export const useHover = () => {
  interface IsHoverProps {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }

  type UseHoverResult = [boolean, IsHoverProps];
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo<UseHoverResult>(() => [isHover, { onMouseEnter, onMouseLeave }], [
    isHover,
    onMouseEnter,
    onMouseLeave,
  ]);
};
