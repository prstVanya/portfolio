import { classNames } from 'utils/classNames/classNames';
import Typist from 'react-typist-component';
import { RefObject, useEffect, useState } from 'react';
import cls from './Home.module.css';
import { textData } from '../models/textsForHome';

interface IHomeData {
  className?: string;
  refer: RefObject<HTMLElement>
}

export const Home = ({ className, refer }: IHomeData) => {
  const [isCanvasVisible, setIsCanvasVisible] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsCanvasVisible(true);
    }, 1600);

    return () => {
      clearInterval(interval);
    };
  }, [isCanvasVisible]);

  return (
    <section id='#home' ref={refer} className={classNames(cls.section, {}, [className])}>
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
