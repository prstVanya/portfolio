import { classNames } from 'utils/classNames/classNames';
import Typist from 'react-typist-component';
import cls from './Home.module.css';
import { textData } from '../models/textsForHome';

interface IHomeData {
  className?: string;
}

export const Home = ({ className }: IHomeData) => {
  return (
    <section className={classNames(cls.section, {}, [className])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <Typist>
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
        </Typist>
      </div>
    </section>
  );
};
