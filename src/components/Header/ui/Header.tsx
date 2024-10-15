import { classNames } from 'utils/classNames/classNames';
import Logo from 'assets/images/icons/logo.svg';
import ChangeThemeButton from 'utils/ChangeThemeButton/ChangeThemeButton';
import BurgerSvg from 'assets/images/icons/burger.svg';
import cls from './Header.module.css';

interface HeaderProps {
  className?: string;
  toogleButton: () => void;
  isTrue: boolean;
  openNav: () => void;
}

export const Header = ({
  className, toogleButton, isTrue, openNav,
}: HeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [className])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <div className={classNames(cls.block, {}, [])}>
          <Logo className={classNames(cls.logo, {}, [])} />
        </div>
        <nav className={classNames(cls.nav, {}, [])}>
          <a className={classNames(cls.to, {}, [])}>About</a>
          <a className={classNames(cls.to, {}, [])}>Projects</a>
          <a className={classNames(cls.to, {}, [])}>Education</a>
          <a className={classNames(cls.to, {}, [])}>Info</a>
        </nav>
        <ChangeThemeButton isTrue={isTrue} toogleButton={toogleButton} />
        <button onClick={openNav} className={classNames(cls.navButton, {}, [])}>
          <BurgerSvg />
        </button>
      </div>
    </header>
  );
};
