import { classNames } from 'utils/classNames/classNames';
import SunSvg from 'assets/images/icons/sun-2-svgrepo-com.svg';
import MoonSvg from 'assets/images/icons/moon.svg';
import cls from './Header.module.css';
import { headerData } from '../model/navbarData';

interface HeaderProps {
  className?: string;
  isDark: boolean;
  toogleButton: () => void;
}

const Header = ({ isDark, toogleButton }: HeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <div className={classNames(cls.logo, {}, [])}></div>
        <nav className={classNames(cls.nav, {}, [])}>
          {headerData.map((a) => {
            return (
              <a key={a.id} href={a.to} className={classNames(cls.to)}>{a.text}</a>
            );
          })}
        </nav>
      <button onClick={toogleButton} className={classNames(cls.button, {}, [])}>
        {isDark
          ? <MoonSvg className={classNames(cls.svg, {}, [])} />
          : <SunSvg className={classNames(cls.svg, {}, [])} />}
      </button>
      </div>
    </header>
  );
};

export default Header;
