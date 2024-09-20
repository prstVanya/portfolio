import SpliteText from 'utils/spliteText/spliteText';
import { classNames } from 'utils/classNames/classNames';
import YandexLogo from 'assets/images/icons/yandex.svg';
import cls from './Projects.module.css';

export const Projects = () => {
  return (
    <section className={classNames(cls.education, {}, [])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <SpliteText>Education</SpliteText>
        <ul className={classNames(cls.block, {}, [])}>
          <li className={classNames(cls.card, {}, [])}>
            <h3 className={classNames(cls.heading, {}, [])}>CFU</h3>
            <p className={classNames(cls.subtitle, {}, [])}>
              Main university in Crimea:
            </p>
            <div className={classNames(cls.info, {}, [])}>
            <div className={classNames(cls.logo, {}, [])}>
                <YandexLogo className={classNames(cls.svg, {}, [])} />
                <p className={classNames(cls.span, {}, [])}>01.09.2021 - ??</p>
              </div>
              <a
                href='https://cfuv.ru/?ysclid=m17sdd4udt251873995'
                target='_blank'
                className={classNames(cls.link, {}, [])} rel="noreferrer">Link to site</a>
            </div>
          </li>
          <li className={classNames(cls.card, {}, [])}>
            <h3 className={classNames(cls.heading, {}, [])}>Yandex Practicum</h3>
            <p className={classNames(cls.subtitle, {}, [])}>
              Additional training in the web developer course:
            </p>
            <div className={classNames(cls.info, {}, [])}>
              <div className={classNames(cls.logo, {}, [])}>
                <YandexLogo className={classNames(cls.svg, {}, [])} />
                <p className={classNames(cls.span, {}, [])}>28.04.2023 - 23.04.2024</p>
              </div>
              <a
                href='https://practicum.yandex.ru'
                target='_blank'
                className={classNames(cls.link, {}, [])} rel="noreferrer">Link to site</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
