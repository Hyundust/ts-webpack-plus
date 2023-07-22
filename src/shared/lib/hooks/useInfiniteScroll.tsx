import { useEffect, RefObject } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: RefObject<HTMLDivElement>;
    wrapperRef: RefObject<HTMLDivElement>;
}

export function useInfiniteScroll({ callback, wrapperRef, triggerRef }: UseInfiniteScrollOptions) {
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (callback && wrapperElement && triggerElement) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);

            return () => {
                observer.unobserve(triggerElement);
            };
        }
    }, [callback, wrapperRef, triggerRef]);
}
