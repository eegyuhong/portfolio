import GreaterThan from '@/assets/icons/greater-than.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import clsx from 'clsx';
import { EnumLink } from '@/enums';

interface IProps {
  className?: string;
  bgColor?: string;
  txtColor?: string;
  style?: {
    [key: string]: string;
  };
}

export default function SendMsgBtn({
  className,
  bgColor,
  txtColor,
  ...props
}: IProps) {
  return (
    <div className={`${className}`} {...props}>
      <Link
        href={EnumLink.SEND_EMAIL}
        target="_blank"
        className={clsx([
          styles.btn,
          txtColor ?? 'text-neutral-600',
          'relative inline-block'
        ])}
      >
        <p
          className={`${styles.btn__title} px-6 leading-10 translate-x-0 transition-all duration-300 text-neutral-50`}
        >
          + Send message
        </p>
        <div
          className={clsx([
            styles.btn__bg,
            bgColor ?? 'bg-neutral-400',
            'absolute top-0 right-0 w-full h-full rounded-full transition-all duration-300 -z-[1]'
          ])}
        >
          <Image
            className={`${styles.btn__icon} opacity-0 transition-all duration-300`}
            src={GreaterThan}
            alt="오른쪽 화살표 아이콘"
            width={40}
            height={40}
            priority
          />
        </div>
      </Link>
    </div>
  );
}
