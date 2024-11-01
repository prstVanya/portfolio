import { classNames } from 'utils/classNames/classNames';
import { RefObject } from 'react';
import cls from './Main.module.css';
import { Home } from './Home';
import { About } from './About';
import { Study } from './Study';
import { projectsData } from './ProjectsContent/model/projectsContent';
import { Projects } from './Projects';

interface IMainData {
  className?: string;
  isDark: boolean;
  refHome: RefObject<HTMLElement>;
  refAbout: RefObject<HTMLElement>;
  refProject: RefObject<HTMLElement>;
  refStudy: RefObject<HTMLElement>;
}

const Main = ({
  className, isDark, refHome, refAbout, refProject, refStudy,
}: IMainData) => {
  return (
    <main className={classNames(cls.content, {}, [className])}>
      <Home refer={refHome} />
      <About refer={refAbout} isDark={isDark} />
      <Study refer={refProject} isDark={isDark} data={projectsData} />
      <Projects refer={refStudy} />
    </main>
  );
};

export default Main;
