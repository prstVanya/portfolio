import { classNames } from 'utils/classNames/classNames';
import Logo from 'assets/images/icons/logo.svg';
import cls from './Header.module.css';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [className])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <ul className={classNames(cls.nav, {}, [])}>
          <li className={classNames(cls.block, {}, [])}>
            <a className={classNames(cls.to, {}, [])}>About</a>
          </li>
          <li className={classNames(cls.block, {}, [])}>
            <a className={classNames(cls.to, {}, [])}>Study</a>
          </li>
          <li className={classNames(cls.block, {}, [])}>
            <Logo className={classNames(cls.logo, {}, [])} />
          </li>
          <li className={classNames(cls.block, {}, [])}>
            <a className={classNames(cls.to, {}, [])}>Projects</a>
          </li>
          <li className={classNames(cls.block, {}, [])}>
            <a className={classNames(cls.to, {}, [])}>Footer</a>
          </li>
        </ul>
        <div className={classNames(cls.ref, {}, [])}>
          <div className={classNames(cls.point, {}, [])}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
