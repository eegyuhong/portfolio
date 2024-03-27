'use client';

import { useCallback, useState } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { AntonFont } from '@/common/font';
import GithubLinkBtn from '@/components/common/githubLinkBtn';
import ProjectLinkBtn from '@/components/common/projectLinkBtn';
import FadeEnter from '@/components/common/fadeEnter';

interface IProps {
  work: {
    id: string;
    title: string;
    titleKr: string;
    description: string;
    github: string;
    used: string;
    link: string;
    bgImage: string;
  };
}

type ClipPath = [number, number, number, number];

export default function Contents({ work, ...props }: IProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [clipPath, setClipPath] = useState<ClipPath>([0, 0, 0, 0]);
  const [isShowBtn, setisShowBtn] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [setTargetRef] = useIntersectionObserver(
    useCallback(([{ isIntersecting }]) => {
      if (isIntersecting) setIsFetching(true);
    }, [])
  );

  const resetAnimation = (path: ClipPath) => {
    setIsPaused(true);
    setIsPlaying(false);
    setClipPath(path);
  };

  const startShowAnimation = () => {
    setTimeout(() => {
      setIsPlaying(true);
      setIsPaused(false);
      setClipPath([0, 0, 100, 100]);
    }, 10);
  };

  const showGoDownBgAnimation = () => {
    resetAnimation([0, 0, 0, 0]);
    startShowAnimation();
  };

  const showGoUpBgAnimation = () => {
    resetAnimation([100, 100, 100, 100]);
    startShowAnimation();
  };

  const hideGoUpBgAnimation = () => {
    setTimeout(() => setClipPath([0, 0, 0, 0]), 10);
  };

  const hideGoDownBgAnimation = () => {
    setTimeout(() => setClipPath([100, 100, 100, 100]), 10);
  };

  const handleMouse = (e: any) => {
    const { y, height } = e.currentTarget.getBoundingClientRect();
    const { clientY } = e.nativeEvent;
    const goal = y + height / 2;

    if (e.type === 'mouseenter') {
      setisShowBtn(true);
      clientY < goal ? showGoDownBgAnimation() : showGoUpBgAnimation();
    } else {
      setisShowBtn(false);
      clientY < goal ? hideGoUpBgAnimation() : hideGoDownBgAnimation();
    }
  };

  return (
    <>
      <hr />
      <div
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
        className="relative z-0 grid grid-cols-2 h-[35vw] max-h-[35vh] hover:text-neutral-200 transition-colors px-4 lg:px-32 xl:pr-52 xl:pl-[136px]"
        {...props}
      >
        <div ref={setTargetRef} className="relative z-10 self-center">
          <FadeEnter
            as="h3"
            gap="8px"
            isShow={isFetching}
            className={`${AntonFont.className} text-4xl xl:text-6xl`}
          >
            {work.title}
          </FadeEnter>
        </div>
        <div className="relative z-10 self-center">
          <FadeEnter
            as="h4"
            isShow={isFetching}
            className="mb-3 text-xl font-bold xl:text-4xl"
          >
            {work.titleKr}
          </FadeEnter>
          <FadeEnter isShow={isFetching} className="font-thin xl:text-xl">
            {work.description}
          </FadeEnter>
          <FadeEnter isShow={isFetching} className="font-thin xl:text-lg">
            {work.used}
          </FadeEnter>
          <div className="absolute flex gap-3 -bottom-12">
            <FadeEnter as="div" isShow={isShowBtn} className="xl:text-xl">
              <GithubLinkBtn href={work.github} />
            </FadeEnter>
            <FadeEnter
              as="div"
              isShow={isShowBtn}
              className="xl:text-xl"
              style={{ transitionDelay: isShowBtn ? '0.1s' : '0s' }}
            >
              <ProjectLinkBtn href={work.link} />
            </FadeEnter>
          </div>
        </div>
        <div
          className="absolute top-0 left-0 z-0 w-full h-full bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${work.bgImage})`,
            transition: isPaused ? 'none' : 'all 0.5s ease',
            backgroundSize: isPlaying ? '120%' : '100%',
            clipPath: `polygon(0% ${clipPath[0]}%, 100% ${clipPath[1]}%, 100% ${clipPath[2]}%, 0% ${clipPath[3]}%)`
          }}
        >
          <div className="h-full bg-[#00000099]" />
        </div>
      </div>
    </>
  );
}
