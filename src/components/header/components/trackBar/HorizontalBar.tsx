import { useScrollStore } from '@/stores';
import { clsx } from 'clsx';
import { useMemo } from 'react';

interface IProps {
  className?: string;
  bgColor?: string;
  bgInvertColor?: string;
}

export default function HorizontalBar({
  className,
  bgColor = 'bg-neutral-200',
  bgInvertColor = 'bg-neutral-600',
  ...props
}: IProps) {
  const { innerHeight, scrollY, bodyHeight } = useScrollStore();

  const scale = useMemo(
    () => scrollY / (bodyHeight - innerHeight),
    [bodyHeight, innerHeight, scrollY]
  );

  const horizontalBg = useMemo(() => {
    if (!innerHeight && !scrollY) return false;
    else {
      const goal = innerHeight - 72;
      return goal <= scrollY;
    }
  }, [innerHeight, scrollY]);

  return (
    <div
      className={clsx([
        className,
        horizontalBg ? bgInvertColor : bgColor,
        'w-full h-1 origin-left scale-x-0'
      ])}
      style={{
        transition: 'background-color 0.5s ease',
        transform: `scaleX(${scale})`
      }}
      {...props}
    ></div>
  );
}
