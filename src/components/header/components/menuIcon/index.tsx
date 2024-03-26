import { useMemo, useState } from 'react';
import { useScrollStore } from '@/stores';
import { useCollapsedStore } from '@/stores';
import clsx from 'clsx';

interface IProps {
  className?: string;
  strokeColor?: string;
  strokeInvertColor?: string;
}

export default function MenuIcon({
  className,
  strokeColor = 'stroke-neutral-200',
  strokeInvertColor = 'stroke-neutral-600',
  ...props
}: IProps) {
  const { innerWidth, innerHeight, scrollY } = useScrollStore();
  const { showCollapsedNav } = useCollapsedStore();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMouseover, setIsMouseover] = useState(false);

  const isLargeScreen = useMemo(() => innerWidth >= 1280, [innerWidth]);

  const strokeDashoffset = useMemo(
    () => (isPlaying ? 32 * -2 : 0),
    [isPlaying]
  );

  const transition = useMemo(
    () => ({
      path1:
        'stroke 0.5s ease, transform 0.5s ease' +
        `${isPlaying ? ', stroke-dashoffset 0.5s ease 0.3s' : ''}`,
      path2:
        'stroke 0.5s ease, transform 0.5s ease' +
        `${isPlaying ? ', stroke-dashoffset 0.5s ease 0.4s' : ''}`,
      path3:
        'stroke 0.5s ease, transform 0.5s ease' +
        `${isPlaying ? ', stroke-dashoffset 0.5s ease 0.5s' : ''}`
    }),
    [isPlaying]
  );

  const transform = useMemo(
    () => ({
      path1: `translateY(-${isPlaying || isMouseover ? '10' : '0'}%)`,
      path3: `translateY(${isPlaying || isMouseover ? '10' : '0'}%)`
    }),
    [isPlaying, isMouseover]
  );

  const goal = useMemo(
    () => (!isLargeScreen ? innerHeight - 34 : innerHeight / 2 - 34),
    [isLargeScreen, innerHeight]
  );

  const isInvertedColor = useMemo(
    () => innerHeight && goal < scrollY,
    [goal, innerHeight, scrollY]
  );

  const handleMouseEnter = () => {
    setIsMouseover(true);

    if (isPlaying) return;
    else {
      setIsPlaying(true);
      setTimeout(() => {
        setIsPlaying(false);
        if (isMouseover) setIsMouseover(false);
      }, 1000);
    }
  };

  const handleMouseLeave = () => setIsMouseover(false);

  return (
    <div
      className={clsx([
        className,
        isInvertedColor ? strokeInvertColor : strokeColor,
        'cursor-pointer'
      ])}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        onClick={showCollapsedNav}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <line
          x1="6"
          y1="16"
          x2="38"
          y2="16"
          strokeWidth="2"
          strokeDasharray="32"
          style={{
            strokeDashoffset,
            transition: transition.path1,
            transform: transform.path1
          }}
        />
        <line
          x1="6"
          y1="22"
          x2="38"
          y2="22"
          strokeWidth="2"
          strokeDasharray="32"
          style={{
            strokeDashoffset,
            transition: transition.path2
          }}
        />
        <line
          x1="6"
          y1="28"
          x2="38"
          y2="28"
          strokeWidth="2"
          strokeDasharray="32"
          style={{
            strokeDashoffset,
            transition: transition.path3,
            transform: transform.path3
          }}
        />
      </svg>
    </div>
  );
}
