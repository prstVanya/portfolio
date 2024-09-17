import { classNames } from 'utils/classNames/classNames';
import cls from './Home.module.css';
import { textData } from '../models/textsForHome';
import SpliteText from 'utils/spliteText/spliteText';

interface IHomeData {
  className?: string;
}

export const Home = ({ className }: IHomeData) => {
  let currentAge = 20;
  const currentDay = new Date();
  const getDay = currentDay.getDate();
  const getMonth = currentDay.getMonth() + 1;
  if (getDay === 5 && getMonth === 11) {
    currentAge += 1;
  }

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
                {t.id === 3 ? `${t.text} ${currentAge}` : t.text}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};
