import { AntonFont } from '@/common/font';
import FrontBg from '@/assets/images/frontBg.svg';
import styles from './index.module.scss';
import Link from 'next/link';

export default function Front() {
  return (
    <div
      id="front"
      className={styles.container}
      style={{ backgroundImage: `url(${FrontBg.src})` }}
    >
      <div className="grid h-screen grid-rows-3 px-4 lg:px-32 grid-row text-neutral-200 bg-[#00000080] xl:px-52">
        <div className="flex flex-col justify-center row-start-2">
          <div className={`${AntonFont.className} tracking-wider`}>
            <p className="mb-3 text-lg xl:text-2xl">DEVELOPER EE.GYUHONG</p>
            <h2 className="text-5xl xl:text-7xl">FLEXIBLE THINKING</h2>
          </div>
          <p className="text-3xl font-thin xl:text-5xl">
            더 나은 방법을 찾는 유연한 사고
          </p>
        </div>
        <div className="flex flex-col justify-end row-start-3">
          <p className="pl-8 text-xs xl:text-base font-bold border-l-border h-14 xl:h-20 border-l-[1px]">
            <Link href="#about">SEE MY PORTFOLIO</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
