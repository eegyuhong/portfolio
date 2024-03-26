'use client';

import { useCallback, useState } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { AntonFont } from '@/common/font';
import FadeEnter from '@/components/common/fadeEnter';
import SendMsgBtn from '@/components/common/sendMsgBtn';

export default function Contact() {
  const [isFetching, setIsFetching] = useState(false);
  const [setTargetRef] = useIntersectionObserver(
    useCallback(([{ isIntersecting }]) => {
      if (isIntersecting) setIsFetching(true);
    }, [])
  );

  return (
    <div
      id="contact"
      className="grid h-[50vh] grid-cols-2 px-4 lg:px-32 xl:pr-52 xl:pl-[136px]"
    >
      <div ref={setTargetRef} className="self-center">
        <FadeEnter isShow={isFetching} className="font-thin xl:text-xl">
          looking forward to
        </FadeEnter>
        <FadeEnter
          as="h2"
          delay={1}
          gap="8px"
          isShow={isFetching}
          className={`${AntonFont.className} text-4xl xl:text-6xl`}
        >
          Contact me
        </FadeEnter>
      </div>
      <div className="flex flex-wrap items-center self-center gap-2 xl:gap-10">
        <FadeEnter
          delay={2}
          isShow={isFetching}
          className="font-thin xl:text-lg"
        >
          ee.gyuhong@gmail.com
        </FadeEnter>
        <FadeEnter as="div" delay={4} isShow={isFetching}>
          <SendMsgBtn />
        </FadeEnter>
      </div>
    </div>
  );
}
