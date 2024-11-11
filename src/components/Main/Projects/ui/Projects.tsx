import SpliteText from 'utils/spliteText/spliteText';
import { classNames } from 'utils/classNames/classNames';
import { CommandBlock } from 'components/Main/CommandBlock';
import { RefObject } from 'react';
import cls from './Projects.module.css';

interface IProjectsData {
  className?: string;
  refer: RefObject<HTMLElement>;
}

export const Projects = ({ className, refer }: IProjectsData) => {
  return (
    <section id='#education' ref={refer} className={classNames(cls.education, {}, [className])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <SpliteText>Education</SpliteText>
        <CommandBlock>
          <p className={classNames(cls.text, {}, [])}>
            <span className={classNames(cls.span, {}, [])}>prsvanya $</span>
            {' '}
            cd education
          </p>
          <p className={classNames(cls.text, {}, [])}>
            <span className={classNames(cls.span, {}, [])}>
              prstvanya/education $
            </span>
            {' '}
            ls
          </p>
          <ul className={classNames(cls.ul, {}, [])}>
            <li className={classNames(cls.text, {}, [cls.hover])}>
              📖 cfu: main crimean university, specialization special math, 2021-2025
              {' '}
              <a
                className={classNames(cls.href, {}, [])}
                href='https://cfuv.ru/?ysclid=m2aggfsxni562559702'
                target='_blank' rel="noreferrer"
              >link</a>
            </li>
            <li className={classNames(cls.text, {}, [cls.hover])}>
              💻 yandex practicum: online course web-developer, 2023-2024
              {' '}
              <a
                className={classNames(cls.href, {}, [])}
                href='https://practicum.yandex.ru'
                target='_blank' rel="noreferrer"
              >link</a>
            </li>
          </ul>
        </CommandBlock>
      </div>
    </section>
  );
};
