import { Children, ElementType, ReactElement, cloneElement } from 'react';

interface IProps {
  as?: ElementType;
  isShow: boolean;
  children: string | ReactElement<IChildrenProps>;
  className?: string;
  gap?: string;
  delay?: number;
  style?: {
    transition?: string;
    transform?: string;
  };
}

interface IChildrenProps {
  className?: string;
  style?: {
    opacity?: number;
    transition?: string;
    transitionDelay?: string;
    transform?: string;
  };
}

export default function FadeEnter({
  as,
  isShow,
  children,
  className,
  gap = '4px',
  delay = 0
}: IProps) {
  const isStringChildren = typeof children === 'string';
  const Component = as ?? 'p';

  if (isStringChildren) {
    return (
      <Component className={`${className} overflow-hidden`}>
        {children.split(' ').map((el, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              marginLeft: i === 0 ? '' : (gap ?? '4px'),
              transition: 'transform 1s ease',
              transitionDelay: `${(i + delay) * 0.05}s`,
              transform: `translateY(${isShow ? 0 : 100}%)`
            }}
          >
            {el}
          </span>
        ))}
      </Component>
    );
  }

  return (
    <Component className={`${className} overflow-hidden`}>
      {Children.map(children, (child, i) => {
        return cloneElement(child, {
          className: `${child.props.className} inline-block`,
          style: {
            transition: 'all 1s ease',
            transitionDelay: `${(i + delay) * 0.05}s`,
            transform: `translateY(${isShow ? 0 : 100}%)`,
            ...child.props.style
          }
        });
      })}
    </Component>
  );
}
