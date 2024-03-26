'use client';

import { useCollapsedStore } from '@/stores';
import { AntonFont } from '@/common/font';
import { clsx } from 'clsx';
import LogoIcon from './components/logoIcon';
import CloseIcon from './components/closeIcon/intdex';
import SendMsgBtn from '@/components/common/sendMsgBtn';
import FadeEnter from '@/components/common/fadeEnter';
import { useRouter } from 'next/navigation';

export default function Nav() {
  const router = useRouter();
  const { collapsedNav, hideCollapsedNav } = useCollapsedStore();

  const handleclick = (path: string) => {
    hideCollapsedNav();
    setTimeout(() => router.push(path), 1000);
  };

  return (
    <nav
      className={clsx([
        `${collapsedNav ? 'scale-x-100' : 'scale-x-0'}`,
        'fixed flex w-screen h-screen origin-left bg-black'
      ])}
      style={{
        transition: 'transform 0.8s',
        transitionDuration: collapsedNav ? '1s' : '0.7s',
        transitionDelay: collapsedNav ? '0s' : '0.3s',
        transitionTimingFunction: collapsedNav
          ? 'cubic-bezier(0.15, 1, 0.2, 1)'
          : 'cubic-bezier(0.85, 0, 0.8, 0)'
      }}
    >
      <LogoIcon className="absolute top-3 left-3 stroke-neutral-200" />
      <CloseIcon className="absolute top-3 right-3 stroke-neutral-200" />
      <div className="self-center justify-center w-full px-40 xl:px-60">
        <ul
          className={`${AntonFont.className} text-5xl xl:text-6xl flex flex-col gap-8 xl:flex-row xl:justify-between`}
        >
          <FadeEnter
            as="li"
            isShow={collapsedNav}
            className="cursor-pointer hover:text-neutral-400"
            gap="16px"
            style={{
              transitionProperty: 'color, transform',
              transitionDuration: '0.5s'
            }}
          >
            <button type="button" onClick={() => handleclick('#about')}>
              About me
            </button>
          </FadeEnter>
          <FadeEnter
            as="li"
            isShow={collapsedNav}
            className="cursor-pointer hover:text-neutral-400"
            gap="16px"
            style={{
              transitionProperty: 'color, transform',
              transitionDuration: '0.5s',
              transitionDelay: `0s, ${collapsedNav ? '0.1s' : '0s'}`
            }}
          >
            <button type="button" onClick={() => handleclick('#work')}>
              My works
            </button>
          </FadeEnter>
          <FadeEnter
            as="li"
            isShow={collapsedNav}
            className="cursor-pointer hover:text-neutral-400"
            gap="16px"
            style={{
              transitionProperty: 'color, transform',
              transitionDuration: '0.5s',
              transitionDelay: `0s, ${collapsedNav ? '0.2s' : '0s'}`
            }}
          >
            <button type="button" onClick={() => handleclick('#contact')}>
              Contact me
            </button>
          </FadeEnter>
        </ul>
        <hr
          className="mt-10 mb-10 transition-all xl:mt-40 xl:mb-10"
          style={{
            transition: 'all 0.5s ease',
            transitionDelay: collapsedNav ? '0.3s' : '0s',
            width: collapsedNav ? '100%' : '0%'
          }}
        />
        <FadeEnter
          as="div"
          isShow={collapsedNav}
          className="text-right"
          style={{
            transitionDuration: '0.5s',
            transitionDelay: collapsedNav ? '0.3s' : '0s'
          }}
        >
          <SendMsgBtn />
        </FadeEnter>
      </div>
    </nav>
  );
}
