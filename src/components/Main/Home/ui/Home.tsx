import { classNames } from 'utils/classNames/classNames';
import cls from './Home.module.css';
import { textData } from '../models/textsForHome';

interface IHomeData {
  className?: string;
}

export const Home = ({ className }: IHomeData) => {
  return (
    <section className={classNames(cls.section, {}, [className])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <div className={classNames(cls.texts, {}, [])}>
          {textData.map((t) => {
            return (
              <p
                className={classNames(cls.paragraph, {}, [])}
                key={t.id}
              >
                {t.text}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};
