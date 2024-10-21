import { classNames } from 'utils/classNames/classNames';
import './Loader.css';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames('lds-dual-ring', {}, [className])}></div>
  );
};
