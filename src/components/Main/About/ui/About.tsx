import { classNames } from 'utils/classNames/classNames';
import { Canvas } from '@react-three/fiber';
import SkillsAnimation from 'utils/spriteText/spriteText';
import SpliteText from 'utils/spliteText/spliteText';
import { Statistics } from 'components/Main/Statistics';
import { GitHubStatistics } from 'components/Main/GitHubStatistics';
import { CommandBlock } from 'components/Main/CommandBlock';
import cls from './About.module.css';
import { aboutTitle } from './models/aboutData';

interface IAboutData {
  className?: string;
}

export const About = ({ className }: IAboutData) => {
  return (
    <section className={classNames(cls.about, {}, [className])}>
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
              reading the books and warhammer 40k :)
            </p>
            <a
              href='https://github.com/VanyaGachist2'
              className={classNames(cls.text, {}, [cls.link])}>
                link to github
            </a>
        </CommandBlock>
        <div className={classNames(cls.sprite, {}, [])}>
          <Canvas className={classNames(cls.canvas, {}, [])} camera={{ position: [5, -15, -1] }}>
            <SkillsAnimation />
          </Canvas>
        </div>
        <Statistics />
        <GitHubStatistics />
      </div>
    </section>
  );
};
