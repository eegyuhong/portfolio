import Link from 'next/link';
import styles from './index.module.scss';

interface IProps {
  className?: string;
  href: string;
}

export default function ProjectLinkBtn({ className, href, ...props }: IProps) {
  return (
    <div className={`${className}`} {...props}>
      <Link
        href={href}
        target="_blank"
        className={`${styles.btn} font-black relative gap-2 flex items-end`}
      >
        <p className="mix-blend-difference">See my work</p>
        <div
          className={`${styles.btn__decoration} w-0 h-full bg-neutral-200 transition-all duration-500 absolute top-0 left-0 -z-[1]`}
        />
      </Link>
    </div>
  );
}
