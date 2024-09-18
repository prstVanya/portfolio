import cls from './Footer.module.css';
import { classNames } from 'utils/classNames/classNames';

import Steam from 'assets/images/Footer/steam.svg';
import Vk from 'assets/images/Footer/vk.svg';
import Telegram from 'assets/images/Footer/telegram.svg';

interface IFooterData {
  className?: string;
};

export const Footer = ({ className }: IFooterData) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={classNames(cls.footer, {}, [className])}>
      <nav className={classNames(cls.links, {}, [])}>
        <a 
          className={classNames(cls.link, {}, [])}
          target='_blank'
          href='https://steamcommunity.com/id/674931'
        >
          <Steam />
        </a>
        <a 
          className={classNames(cls.link, {}, [])}
          target='_blank'
          href='https://vk.com/ibolvan123'
        >
          <Vk />
        </a>
        <a 
          className={classNames(cls.link, {}, [])}
          target='_blank'
          href='https://t.me/vanyaChern'
        >
          <Telegram />
        </a>
      </nav>
      <p className={classNames(cls.paragraph, {}, [])}>{`${'@ VanyaGachist'} ${year}`}</p>
    </footer>
  )
}