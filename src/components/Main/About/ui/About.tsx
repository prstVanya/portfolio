import { classNames } from 'utils/classNames/classNames';
import { Canvas } from '@react-three/fiber';
import SkillsAnimation from 'utils/spriteText/spriteText';
import SpliteText from 'utils/spliteText/spliteText';
import cls from './About.module.css';
import { aboutSubtitle, aboutTitle } from './models/aboutData';

interface IAboutData {
  className?: string;
}

export const About = ({ className }: IAboutData) => {
  return (
    <section className={classNames(cls.about, {}, [className])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <SpliteText>{aboutTitle}</SpliteText>
        <div className={classNames(cls.info)}>
          <p className={classNames(cls.subtitle, {}, [])}>
            {aboutSubtitle}
          </p>
        </div>
        <div className={classNames(cls.sprite, {}, [])}>
          <Canvas className={classNames(cls.canvas, {}, [])} camera={{ position: [5, -15, -1] }}>
            <SkillsAnimation />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
