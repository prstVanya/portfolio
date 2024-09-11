import { classNames } from 'utils/classNames/classNames';
import cls from './Main.module.css';
import { Home } from './Home';
import { About } from './About';

interface IMainData {
  className?: string;
}

const Main = ({ className }: IMainData) => {
  return (
    <main className={classNames(cls.content, {}, [className])}>
      <Home />
      <About />
    </main>
  );
};

export default Main;
