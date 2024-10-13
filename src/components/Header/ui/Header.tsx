import { classNames } from 'utils/classNames/classNames';
import Logo from 'assets/images/icons/logo.svg';
import ChangeSun from 'utils/changeSun/changeSun';
import cls from './Header.module.css';

interface HeaderProps {
  className?: string;
  toogleButton: () => void;
  isTrue: boolean;
}

export const Header = ({ className, toogleButton, isTrue }: HeaderProps) => {
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
        <button onClick={toogleButton} className={classNames(cls.button, {}, [])}>
          <ChangeSun isTrue={isTrue} />
        </button>
      </div>
    </header>
  );
};
