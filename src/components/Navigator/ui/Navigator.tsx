import ChangeThemeButton from 'utils/ChangeThemeButton/ChangeThemeButton';
import { classNames } from 'utils/classNames/classNames';
import CloseSvg from 'assets/images/icons/close_icon.svg';
import cls from './Navigator.module.css';

interface INavigatorData {
  className?: string;
  isTrue: boolean;
  toogleButton: () => void;
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

const Navigator = ({
  className, isTrue, toogleButton, isOpen, onClose, isDark,
}: INavigatorData) => {
  return (
    <div className={classNames(
      cls.navigator,
      {
        [cls.open]: isOpen,
        [cls.dark]: isDark,
      },
      [className],
    )}
    >
      <nav className={classNames(cls.container, {}, [])}>
        <a href='#' className={classNames(
          cls.href,
          {
            [cls.darkHref]: isDark,
          },
          [],
        )}>About</a>
        <a href='#' className={classNames(
          cls.href,
          {
            [cls.darkHref]: isDark,
          },
          [],
        )}>Projects</a>
        <a href='#' className={classNames(
          cls.href,
          {
            [cls.darkHref]: isDark,
          },
          [],
        )}>Education</a>
        <a href='#' className={classNames(
          cls.href,
          {
            [cls.darkHref]: isDark,
          },
          [],
        )}>Info</a>
      </nav>
      <ChangeThemeButton 
        className={classNames(cls.but, {}, [])} 
        isNavBar={false} 
        isTrue={isTrue} 
        toogleButton={toogleButton} 
      />
      <button onClick={onClose} className={classNames(cls.close, {}, [])}>
        <CloseSvg />
      </button>
    </div>
  );
};

export default Navigator;
