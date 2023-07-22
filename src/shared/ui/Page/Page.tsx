import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Page.module.scss";
import { ReactNode, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll";

export interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?:()=>void
}

export const Page = ({ className, children,onScrollEnd }: PageProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
