'use client';

import { useCallback, useState } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { AntonFont } from '@/common/font';
import FadeEnter from '@/components/common/fadeEnter';

export default function Title() {
  const [isFetching, setIsFetching] = useState(false);
  const [setTargetRef] = useIntersectionObserver(
    useCallback(([{ isIntersecting }]) => {
      if (isIntersecting) setIsFetching(true);
    }, [])
  );

  return (
    <div
      id="work"
      className="grid h-[50vh] grid-cols-2 px-4 lg:px-32 xl:pr-52 xl:pl-[136px]"
    >
      <div className="self-center">
        <div ref={setTargetRef}>
          <FadeEnter isShow={isFetching} className="font-thin xl:text-xl">
            selecte
          </FadeEnter>
          <FadeEnter
            as="h2"
            delay={1}
            gap="8px"
            isShow={isFetching}
            className={`${AntonFont.className} text-4xl xl:text-6xl`}
          >
            My works
          </FadeEnter>
        </div>
      </div>
      <div className="self-center text-xl font-black xl:text-4xl">
        <FadeEnter isShow={isFetching} delay={2}>
          web - page
        </FadeEnter>
        <FadeEnter isShow={isFetching} delay={3}>
          design & development
        </FadeEnter>
      </div>
    </div>
  );
}
