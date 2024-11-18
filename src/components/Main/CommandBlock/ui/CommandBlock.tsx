import { ReactNode } from 'react';
import { classNames } from 'utils/classNames/classNames';
import cls from './CommandBlock.module.css';

interface ICommandBlockData {
  className?: string;
  children: ReactNode;
}

export const CommandBlock = ({ className, children }: ICommandBlockData) => {
  return (
    <div className={classNames(cls.info)}>
      <div className={classNames(cls.points, {}, [className])}>
        <div className={classNames(cls.point, {}, [])}></div>
        <div className={classNames(cls.point, {}, [cls.pointyellow])}></div>
        <div className={classNames(cls.point, {}, [cls.pointgreen])}></div>
      </div>
      <div className={classNames(cls.block, {}, [])}>
        {children}
      </div>
    </div>
  );
};
