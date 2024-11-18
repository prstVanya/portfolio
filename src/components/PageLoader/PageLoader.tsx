import { classNames } from 'utils/classNames/classNames';
import './PageLoader.css';
import { Loader } from 'utils/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames('pageLoader', {}, [className])}>
      <Loader />
    </div>
  );
};
