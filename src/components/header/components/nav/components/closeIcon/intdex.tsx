import { useCollapsedStore } from '@/stores';

interface IProps {
  className?: string;
}

export default function CloseIcon({ className, ...props }: IProps) {
  const { collapsedNav, hideCollapsedNav } = useCollapsedStore();

  return (
    <div {...props} className={`${className}`} onClick={hideCollapsedNav}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="7.35355"
          y1="7.64645"
          x2="36.3536"
          y2="36.6464"
          strokeDasharray="41.0122"
          style={{
            transition: 'stroke-dashoffset 0.5s ease',
            transitionDelay: collapsedNav ? '0.3s' : '0s',
            strokeDashoffset: collapsedNav ? 0 : 41.0122
          }}
        />
        <line
          x1="36.3536"
          y1="7.35355"
          x2="7.35355"
          y2="36.3536"
          strokeDasharray="41.0122"
          style={{
            transition: 'stroke-dashoffset 0.5s ease',
            transitionDelay: collapsedNav ? '0.4s' : '0.1s',
            strokeDashoffset: collapsedNav ? 0 : 41.0122
          }}
        />
      </svg>
    </div>
  );
}
