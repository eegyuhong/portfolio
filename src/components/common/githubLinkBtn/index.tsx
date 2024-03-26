import Link from 'next/link';
import styles from './index.module.scss';

interface IProps {
  className?: string;
  href: string;
}

export default function GithubLinkBtn({ className, href, ...props }: IProps) {
  return (
    <div className={`${className}`} {...props}>
      <Link
        href={href}
        target="_blank"
        className={`${styles.btn} font-black relative`}
      >
        <p>Github</p>
        <div
          className={`${styles.btn__decoration} w-0 h-[2px] bg-neutral-200 transition-all duration-500 absolute bottom-[2px]`}
        />
      </Link>
    </div>
  );
}
