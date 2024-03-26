import { useMemo, useRef } from 'react';
import { useScrollStore } from '@/stores';
import clsx from 'clsx';

interface IProps {
  className?: string;
  bgColor?: string;
  bgInvertColor?: string;
}

export default function VerticalBar({
  className,
  bgColor = 'bg-neutral-200',
  bgInvertColor = 'bg-neutral-600',
  ...props
}: IProps) {
  const { innerHeight, scrollY, bodyHeight } = useScrollStore();
  const trackBarRef = useRef<HTMLDivElement | null>(null);

  const translate = useMemo(
    () => scrollY * (innerHeight / (bodyHeight - innerHeight)) * 0.9,
    [bodyHeight, innerHeight, scrollY]
  );

  const verticalBg = useMemo(() => {
    if (!innerHeight && !scrollY) return false;
    else {
      const { height, top } = trackBarRef.current!.getBoundingClientRect();
      const goal = innerHeight - scrollY;
      return top + height / 2 > goal;
    }
  }, [innerHeight, scrollY]);

  return (
    <div
      ref={trackBarRef}
      className={clsx([
        className,
        verticalBg ? bgInvertColor : bgColor,
        'h-[10%] bg-neutral-400'
      ])}
      style={{
        transition: 'background-color 0.5s ease',
        transform: `translateY(${translate}px)`
      }}
      {...props}
    ></div>
  );
}
