import ChangeThemeButton from 'utils/ChangeThemeButton/ChangeThemeButton';
import { classNames } from 'utils/classNames/classNames';
import cls from './Navigator.module.css';

interface INavigatorData {
  className?: string;
  isTrue: boolean;
  toogleButton: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const Navigator = ({
  className, isTrue, toogleButton, isOpen, onClose,
}: INavigatorData) => {
  return (
    <div className={classNames(cls.navigator, { [cls.open]: isOpen }, [className])}>
      <nav className={classNames(cls.container, {}, [])}>
        <a href='#' className={classNames(cls.href, {}, [])}>About</a>
        <a href='#' className={classNames(cls.href, {}, [])}>Projects</a>
        <a href='#' className={classNames(cls.href, {}, [])}>Education</a>
        <a href='#' className={classNames(cls.href, {}, [])}>Info</a>
      </nav>
      <ChangeThemeButton isTrue={isTrue} toogleButton={toogleButton} />
      <button onClick={onClose} className={classNames(cls.close, {}, [])}></button>
    </div>
  );
};

export default Navigator;
