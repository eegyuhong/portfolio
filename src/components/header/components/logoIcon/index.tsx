import { useMemo, useState } from 'react';
import { useScrollStore } from '@/stores';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

interface IProps {
  className?: string;
  strokeColor?: string;
  strokeInvertColor?: string;
}

export default function LogoIcon({
  className,
  strokeColor = 'stroke-neutral-200',
  strokeInvertColor = 'stroke-neutral-600',
  ...props
}: IProps) {
  const router = useRouter();
  const { innerHeight, scrollY } = useScrollStore();
  const [isPlaying, setIsPlaying] = useState(false);

  const strokeDashoffset = useMemo(
    () => ({
      path1: isPlaying ? 54.4543 * -2 : 0,
      path2: isPlaying ? 19 * -2 : 0,
      path3: isPlaying ? 11 * -2 : 0
    }),
    [isPlaying]
  );

  const transition = useMemo(
    () => ({
      path1:
        'stroke 0.5s ease' +
        `${isPlaying ? ', stroke-dashoffset 0.5s ease' : ''}`,
      path2:
        'stroke 0.5s ease' +
        `${isPlaying ? ', stroke-dashoffset 0.5s ease 0.2s' : ''}`,
      path3:
        'stroke 0.5s ease' +
        `${isPlaying ? ', stroke-dashoffset 0.5s ease 0.3s' : ''}`
    }),
    [isPlaying]
  );

  const isInvertedColor = useMemo(
    () => innerHeight && innerHeight - 34 < scrollY,
    [innerHeight, scrollY]
  );

  const handleMouseEnter = () => {
    if (isPlaying) return;
    else {
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 800);
    }
  };

  return (
    <div
      className={clsx([
        className,
        isInvertedColor ? strokeInvertColor : strokeColor,
        'cursor-pointer'
      ])}
      {...props}
      onClick={() => router.push('#front')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        onMouseEnter={handleMouseEnter}
      >
        <path
          d="M28.5 33.2583C26.5238 34.3993 24.282 35 22 35C19.718 35 17.4763 34.3993 15.5 33.2583C13.5238 32.1173 11.8827 30.4763 10.7417 28.5C9.60068 26.5238 9 24.282 9 22C9 19.718 9.60068 17.4763 10.7417 15.5C11.8827 13.5238 13.5237 11.8827 15.5 10.7417C17.4762 9.60068 19.718 9 22 9C24.282 9 26.5237 9.60068 28.5 10.7417"
          strokeWidth="6"
          strokeDasharray="54.4543"
          style={{
            transition: transition.path1,
            strokeDashoffset: strokeDashoffset.path1
          }}
        />
        <line
          x1="38"
          y1="22"
          x2="19"
          y2="22"
          strokeWidth="6"
          strokeDasharray="19"
          style={{
            transition: transition.path2,
            strokeDashoffset: strokeDashoffset.path2
          }}
        />
        <line
          x1="35"
          y1="27"
          x2="35"
          y2="38"
          strokeWidth="6"
          strokeDasharray="11"
          style={{
            transition: transition.path3,
            strokeDashoffset: strokeDashoffset.path3
          }}
        />
      </svg>
    </div>
  );
}
