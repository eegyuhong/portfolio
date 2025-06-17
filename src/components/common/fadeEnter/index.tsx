import { Children, ElementType, ReactElement, cloneElement } from 'react';

interface IProps {
  as?: ElementType;
  isShow: boolean;
  children: string | ReactElement;
  className?: string;
  gap?: string;
  delay?: number;
  style?: {
    transitionProperty?: string;
    transitionDuration?: string;
    transitionTimingFunction?: string;
    transitionDelay?: string;
    opacity?: number;
    transform?: string;
  };
}

export default function FadeEnter({
  as,
  isShow,
  children,
  className,
  gap = '4px',
  delay = 0,
  style
}: IProps) {
  const isStringChildren = typeof children === 'string';
  const Component = as ?? 'p';
  const childrenStyle = (i: number) => {
    return {
      marginLeft: i === 0 ? '' : (gap ?? '4px'),
      transitionProperty: 'transform',
      transitionDuration: '1s',
      transitionTimingFunction: 'ease',
      transitionDelay: `${(i + delay) * 0.05}s`,
      transform: `translateY(${isShow ? 0 : 100}%)`,
      ...style
    };
  };

  if (isStringChildren) {
    return (
      <Component className={`${className}`}>
        {children.split(' ').map((el, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <span
              className="inline-block"
              style={{
                ...childrenStyle(i),
                transitionDelay: `${(i + delay) * 0.03}s`
              }}
            >
              {el}
            </span>
          </span>
        ))}
      </Component>
    );
  }

  return (
    <Component className={`${className} overflow-hidden`}>
      {Children.map(children, (child, i) => {
        return cloneElement(child, {
          className: 'inline-block',
          style: { ...childrenStyle(i) }
        });
      })}
    </Component>
  );
}
