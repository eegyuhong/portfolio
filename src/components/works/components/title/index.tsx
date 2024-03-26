'use client';

import { useEffect, useState } from 'react';
import { AntonFont } from '@/common/font';
import FadeEnter from '@/components/common/fadeEnter';

export default function Title() {
  const [isShow, setisShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setisShow(true), 1000);
  }, []);

  return (
    <div
      id="work"
      className="grid h-[50vh] grid-cols-2 px-4 lg:px-32 xl:pr-52 xl:pl-[136px]"
    >
      <div className="self-center">
        <div>
          <FadeEnter isShow={isShow} className="font-thin xl:text-xl">
            selecte
          </FadeEnter>
          <FadeEnter
            as="h2"
            delay={1}
            gap="16px"
            isShow={isShow}
            className={`${AntonFont.className} text-4xl xl:text-6xl`}
          >
            My works
          </FadeEnter>
        </div>
      </div>
      <div className="self-center text-xl font-black xl:text-3xl">
        <FadeEnter isShow={isShow} delay={2}>
          web - page
        </FadeEnter>
        <FadeEnter isShow={isShow} delay={3}>
          design & development
        </FadeEnter>
      </div>
    </div>
  );
}
