import { classNames } from 'utils/classNames/classNames';
import { Canvas } from '@react-three/fiber';
import SkillsAnimation from 'utils/spriteText/spriteText';
import SpliteText from 'utils/spliteText/spliteText';
import { Statistics } from 'components/Main/Statistics';
import { CommandBlock } from 'components/Main/CommandBlock';
import { RefObject } from 'react';
import cls from './About.module.css';
import { aboutTitle } from './models/aboutData';

interface IAboutData {
  className?: string;
  isDark: boolean;
  refer: RefObject<HTMLElement>;
}

export const About = ({ className, isDark, refer }: IAboutData) => {
  return (
    <section id='#about' ref={refer} className={classNames(cls.about, {}, [className])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <SpliteText>{aboutTitle}</SpliteText>
        <CommandBlock>
          <p className={classNames(cls.text, {}, [])}>
            <span className={classNames(cls.span, {}, [])}>
              prstvanya $
            </span> cat aboutme
          </p>
          <p className={classNames(cls.text, {}, [])}>
            <span className={classNames(cls.span, {}, [])}>
              prstvanya/aboutme
              <span className={classNames(cls.main, {}, [])}>
                {' '}(main)
              </span> $
            </span>
            {' '}
              Hello, my name is Vanya and i'm front-end developer from Crimea. I love my work
              and i enjoy to coding and fix the problems. My hobbie its play video games,
              reading the books and boxing :)
            </p>
            <a
              href='https://github.com/VanyaGachist2'
              className={classNames(cls.text, {}, [cls.link])}>
                link to github
            </a>
        </CommandBlock>
        <div className={classNames(cls.sprite, {}, [])}>
          <Canvas className={classNames(cls.canvas, {}, [])} camera={{ position: [5, -15, -1] }}>
            <SkillsAnimation isDark={isDark} />
          </Canvas>
        </div>
        <Statistics />
      </div>
    </section>
  );
};
