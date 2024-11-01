import { classNames } from 'utils/classNames/classNames';
import Logo from 'assets/images/icons/logo.svg';
import ChangeThemeButton from 'utils/ChangeThemeButton/ChangeThemeButton';
import BurgerSvg from 'assets/images/icons/burger.svg';
import cls from './Header.module.css';
import { headerLinks } from '../model/HeaderData';

interface HeaderProps {
  className?: string;
  toogleButton: () => void;
  isTrue: boolean;
  openNav: () => void;
  isDark: boolean;
  scrollPage: (id: string) => void;
}

export const Header = ({
  className, toogleButton, isTrue, openNav, isDark, scrollPage,
}: HeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [className])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <a
          href='#home'
          onClick={(e: any) => {
            e.preventDefault();

            scrollPage('#home');
          }}
          className={classNames(cls.block, {}, [])}>
          <Logo className={classNames(cls.logo, {}, [])} />
        </a>
        <div className={classNames(cls.links, {}, [])}>
          <nav className={classNames(cls.nav, {}, [])}>
            {headerLinks.map((a) => {
              return (
                <a
                  key={a.id}
                  href={a.to}
                  onClick={(e: any) => {
                    e.preventDefault();

                    scrollPage(a.to);
                  }}
                  className={classNames(cls.to, { [cls.dark]: isDark }, [])}
                >
                  {a.name}
                </a>
              );
            })}
          </nav>
        </div>
        <ChangeThemeButton isNavBar={true} isTrue={isTrue} toogleButton={toogleButton} />
        <button onClick={openNav} className={classNames(cls.navButton, {}, [])}>
          <BurgerSvg />
        </button>
      </div>
    </header>
  );
};
