'use client';

import { AntonFont } from '@/common/font';
import FadeEnter from '@/components/common/fadeEnter';
import SendMsgBtn from '@/components/common/sendMsgBtn';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [isShow, setisShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setisShow(true), 1000);
  }, []);

  return (
    <div
      id="contact"
      className="grid h-[50vh] grid-cols-2 px-4 lg:px-32 xl:pr-52 xl:pl-[136px]"
    >
      <div className="self-center">
        <FadeEnter isShow={isShow} className="font-thin xl:text-xl">
          looking forward to
        </FadeEnter>
        <FadeEnter
          as="h2"
          delay={1}
          gap="16px"
          isShow={isShow}
          className={`${AntonFont.className} text-4xl xl:text-6xl`}
        >
          Contact me
        </FadeEnter>
      </div>
      <div className="flex flex-wrap items-center self-center gap-2">
        <FadeEnter delay={2} isShow={isShow} className="font-thin">
          ee.gyuhong@gmail.com
        </FadeEnter>
        <FadeEnter as="div" delay={4} isShow={isShow}>
          <SendMsgBtn />
        </FadeEnter>
      </div>
    </div>
  );
}
