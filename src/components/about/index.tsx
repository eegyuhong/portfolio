'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AntonFont, InterFont } from '@/common/font';
import photoImg from '@/assets/images/avata.png';
import { EnumLink } from '@/enums';
import { about } from '@/common/about';
import FadeEnter from '@/components/common/fadeEnter';
import clsx from 'clsx';

export default function About() {
  const [isShow, setisShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setisShow(true), 1000);
  }, []);

  return (
    <div
      id="about"
      className={clsx([
        'flex flex-col px-4 py-10 gap-5',
        'sm:flex-row sm:h-[50vh] sm:py-0 sm:gap-0',
        'lg:px-32',
        'xl:pr-52 xl:pl-[136px]'
      ])}
    >
      <div className={clsx(['sm:self-center sm:flex-1'])}>
        <div>
          <FadeEnter isShow={isShow} className="font-thin xl:text-xl">
            introduce
          </FadeEnter>
          <FadeEnter
            as="h2"
            delay={1}
            gap="16px"
            isShow={isShow}
            className={`${AntonFont.className} text-4xl xl:text-6xl`}
          >
            About me
          </FadeEnter>
        </div>
        <div className="mt-10 font-thin xl:text-xl">
          {about.split('\n').map((el, i) => (
            <FadeEnter key={i} delay={2 + i} isShow={isShow}>
              {el}
            </FadeEnter>
          ))}
        </div>
      </div>
      <div className={clsx(['self-center', 'sm:flex-1'])}>
        <div className="flex flex-col-reverse items-center text-center lg:flex-row w-fit">
          <div>
            <FadeEnter
              as="h3"
              delay={7}
              isShow={isShow}
              className="mb-3 text-xl font-black xl:text-2xl"
            >
              Lee GyuHong
            </FadeEnter>
            <FadeEnter
              delay={7}
              isShow={isShow}
              className={`${InterFont.className} hover:underline`}
            >
              <Link href={EnumLink.SEND_EMAIL} target="_blank">
                ee.gyuhong@gmail.com
              </Link>
            </FadeEnter>
            <FadeEnter
              delay={7}
              isShow={isShow}
              className={`${InterFont.className} hover:underline`}
            >
              <Link href={EnumLink.SEND_EMAIL} target="_blank">
                GitHub
              </Link>
            </FadeEnter>
          </div>
          <FadeEnter
            delay={10}
            isShow={isShow}
            className="mx-auto max-w-48"
            style={{
              opacity: isShow ? 1 : 0,
              transform: `translateY(${isShow ? 0 : 15}%)`,
              transitionProperty: 'all'
            }}
          >
            <Image src={photoImg} alt="아바타 이미지" />
          </FadeEnter>
        </div>
      </div>
    </div>
  );
}