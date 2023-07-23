import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Page.module.scss";
import { ReactNode, useRef, UIEvent } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch";
import { scrollSaverActions } from "features/ScrollSaver/model/slice/ScrollSaverSlice";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getScrollSaverPath } from "features/ScrollSaver/model/selector/ScrollSaverSelector";
import { StateScheme } from "app/providers/storeProvider";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useThrottle } from "shared/lib/hooks/useThrottle";

export interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {

  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateScheme) =>
    getScrollSaverPath(state, pathname)
  );

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    if (wrapperRef.current && scrollPosition !== undefined) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    console.log("scroll made", e.currentTarget?.scrollTop);
    dispatch(scrollSaverActions.setScrollPos({
      position: e.currentTarget?.scrollTop,
      path: pathname
    }));
  },500);

  return (
        <section
          onScroll={onScroll}
          ref={wrapperRef}
          className={classNames(cls.Page, {}, [className])}
        >
          {children}
          <div ref={triggerRef} />
        </section>
      );
};
