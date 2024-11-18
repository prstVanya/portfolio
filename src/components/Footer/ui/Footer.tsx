import { classNames } from 'utils/classNames/classNames';

import Steam from 'assets/images/Footer/steam.svg';
import Vk from 'assets/images/Footer/vk.svg';
import Telegram from 'assets/images/Footer/telegram.svg';
import Download from 'assets/images/icons/download.svg';
import cls from './Footer.module.css';

interface IFooterData {
  className?: string;
}

export const Footer = ({ className }: IFooterData) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={classNames(cls.footer, {}, [className])}>
      <div className={classNames(cls.block, {}, [])}>
        <nav className={classNames(cls.links, {}, [])}>
          <a
            className={classNames(cls.link, {}, [])}
            target='_blank'
            href='https://steamcommunity.com/id/674931' rel="noreferrer"
          >
            <Steam />
          </a>
          <a
            className={classNames(cls.link, {}, [])}
            target='_blank'
            href='https://vk.com/ibolvan123' rel="noreferrer"
          >
            <Vk />
          </a>
          <a
            className={classNames(cls.link, {}, [])}
            target='_blank'
            href='https://t.me/vanyaChern' rel="noreferrer"
          >
            <Telegram />
          </a>
        </nav>
        <p className={classNames(cls.paragraph, {}, [])}>{`${'@ VanyaGachist'} ${year} 🍺`}</p>
      </div>
      <a
        className={classNames(cls.resume, {}, [])}
        target='_blank'
        href='https://positive-reptile-e2d.notion.site/111b52bac8bb801982c2f25e14c14d70' rel="noreferrer"
      >
        <p className={classNames(cls.textB, {}, [])}>Resume</p>
        <Download />
      </a>
    </footer>
  );
};
