import { classNames } from 'utils/classNames/classNames';
import Sun from 'assets/images/icons/sun.svg';
import Moon from 'assets/images/icons/moon.svg';
import cls from './changeSun.module.css';

interface IChangeSunData {
  isTrue: boolean;
}

const ChangeSun = ({ isTrue }: IChangeSunData) => {
  return (
    isTrue
      ? <Sun className={classNames(cls.svg, {}, [])} />
      : <Moon className={classNames(cls.svg, {}, [])} />
  );
};

export default ChangeSun;
