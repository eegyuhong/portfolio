'use client';

import { useEffect } from 'react';
import { useScrollStore } from '@/stores';
import LogoIcon from './components/logoIcon';
import MenuIcon from './components/menuIcon';
import TrackBar from './components/trackBar';
import Nav from './components/nav';

export default function Header() {
  const { setScrollY, setInnerWidth, setInnerHeight, setBodyHeight } =
    useScrollStore();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
    setBodyHeight(document.body.scrollHeight);
  };

  useEffect(() => {
    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <header className="fixed w-full h-[72px] border-b-border border-b-[1px] xl:h-screen xl:border-b-0 xl:border-r-border xl:border-r-[1px] xl:w-[72px] z-10">
      <LogoIcon className="absolute top-3 left-3" />
      <MenuIcon className="absolute top-3 right-3 xl:top-[50%] xl:translate-y-[-50%]" />
      <TrackBar className="absolute bottom-0 xl:top-0 xl:right-0" />
      <Nav />
    </header>
  );
}
