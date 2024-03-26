import VerticalBar from './VerticalBar';
import HorizontalBar from './HorizontalBar';

interface IProps {
  className?: string;
}

export default function TrackBar({ className, ...props }: IProps) {
  return (
    <div className={`${className} w-full xl:w-1`} {...props}>
      <HorizontalBar className="xl:hidden" />
      <VerticalBar className="hidden xl:block" />
    </div>
  );
}
