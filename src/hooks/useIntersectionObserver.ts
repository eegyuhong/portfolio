import { useState, useEffect } from 'react';

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1
};

export default function useIntersectionObserver(
  onIntersect: IntersectionObserverCallback
) {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersectOnce(onIntersect, target),
      defaultOptions
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [onIntersect, target]);

  return [setTarget];
}

const onIntersectOnce = (
  callback: IntersectionObserverCallback,
  target: HTMLElement
) => {
  return (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    callback(entries, observer);

    if (target && !!entries?.some((entry) => entry.isIntersecting)) {
      observer.unobserve(target);
    }
  };
};
