import {
  useEffect, useState, ReactNode,
} from 'react';
import { useInView } from 'react-intersection-observer';
import { classNames } from 'utils/classNames/classNames';
import cls from './spliteText.module.css';

const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

interface ISpliteTextData {
  children: ReactNode; // Определяем тип для children
}

const SpliteText = ({ children }: ISpliteTextData) => {
  const text = String(children);
  const { ref, inView } = useInView({ threshold: 1 });
  const [header, setHeader] = useState<string>(text);

  function animate() {
    let iteration = 0;

    const interval = setInterval(() => {
      setHeader('');
      let newStr = '';
      text.split('').forEach((_, index) => {
        let char = ALPHABETS[Math.round(Math.random() * 25)] ?? 'M';
        if (index < iteration) {
          char = text[index];
        }
        newStr += char;
      });

      setHeader(newStr);
      iteration += 1;

      if (iteration > text.length) {
        clearInterval(interval);
      }
    }, 90);
  }

  const handleAnimate = () => {
    animate();
  }

  useEffect(() => {
    if (inView) {
      animate();
    }
  }, [inView]);

  return (
    <h2 onMouseEnter={handleAnimate} ref={ref} className={classNames(cls.title, {}, [])}>
      {header}
    </h2>
  );
};

export default SpliteText;
