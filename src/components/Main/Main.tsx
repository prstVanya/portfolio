import { classNames } from 'utils/classNames/classNames';
import cls from './Main.module.css';
import { Home } from './Home';
import { About } from './About';
import { Study } from './Study';
import { projectsData } from './ProjectsContent/model/projectsContent';
import { Projects } from './Projects';

interface IMainData {
  className?: string;
  isDark: boolean;
}

const Main = ({ className, isDark }: IMainData) => {
  return (
    <main className={classNames(cls.content, {}, [className])}>
      <Home />
      <About isDark={isDark} />
      <Study isDark={isDark} data={projectsData} />
      <Projects />
    </main>
  );
};

export default Main;
