import { useCollapsedStore } from '@/stores';
import { useRouter } from 'next/navigation';

interface IProps {
  className?: string;
}

export default function LogoIcon({ className, ...props }: IProps) {
  const router = useRouter();
  const { collapsedNav, hideCollapsedNav } = useCollapsedStore();

  const handleclick = () => {
    hideCollapsedNav();
    setTimeout(() => router.push('/#front'), 1000);
  };

  return (
    <div
      className={`${className} cursor-pointer`}
      {...props}
      onClick={() => handleclick()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
      >
        <path
          d="M28.5 33.2583C26.5238 34.3993 24.282 35 22 35C19.718 35 17.4763 34.3993 15.5 33.2583C13.5238 32.1173 11.8827 30.4763 10.7417 28.5C9.60068 26.5238 9 24.282 9 22C9 19.718 9.60068 17.4763 10.7417 15.5C11.8827 13.5238 13.5237 11.8827 15.5 10.7417C17.4762 9.60068 19.718 9 22 9C24.282 9 26.5237 9.60068 28.5 10.7417"
          strokeWidth="6"
          strokeDasharray="54.4543"
          style={{
            transition: 'stroke-dashoffset 0.5s ease',
            transitionDelay: collapsedNav ? '0.3s' : '0s',
            strokeDashoffset: collapsedNav ? 0 : 54.4543
          }}
        />
        <line
          x1="38"
          y1="22"
          x2="19"
          y2="22"
          strokeWidth="6"
          strokeDasharray="19"
          style={{
            transition: 'stroke-dashoffset 0.5s ease',
            transitionDelay: collapsedNav ? '0.5s' : '0.2s',
            strokeDashoffset: collapsedNav ? 0 : 19
          }}
        />
        <line
          x1="35"
          y1="27"
          x2="35"
          y2="38"
          strokeWidth="6"
          strokeDasharray="11"
          style={{
            transition: 'stroke-dashoffset 0.5s ease',
            transitionDelay: collapsedNav ? '0.6s' : '0.3s',
            strokeDashoffset: collapsedNav ? 0 : 11
          }}
        />
      </svg>
    </div>
  );
}
