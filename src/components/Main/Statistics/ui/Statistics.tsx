import { classNames } from 'utils/classNames/classNames';
import Age from 'utils/stats/stats';
import { CommandBlock } from 'components/Main/CommandBlock';
import cls from './Statistics.module.css';

interface IStatisticsData {
  className?: string;
}

export const Statistics = ({ className }: IStatisticsData) => {
  return (
      <div className={classNames(cls.moreInfo, {}, [className])}>
        <h3 className={classNames(cls.statsHeading)}>Statistics</h3>
        <CommandBlock>
          <p className={classNames(cls.text, {}, [])}>
            <span className={classNames(cls.span, {}, [])}>
              prstvanya $
            </span> cat statistics
          </p>
            <ul className={classNames(cls.stats, {}, [])}>
              <li className={classNames(cls.statsItem, {}, [])}>
                <p className={classNames(cls.text, {}, [])}>Current Age</p>
                <p className={classNames(cls.text, {}, [])}>
                  <Age />
                </p>
              </li>
              <li className={classNames(cls.statsItem, {}, [])}>
                <p className={classNames(cls.text)}>Main City</p>
                <p className={classNames(cls.text, {}, [])}>Simferopol</p>
              </li>
              <li className={classNames(cls.statsItem, {}, [])}>
                <p className={classNames(cls.text)}>SoftSkills</p>
                <p className={classNames(cls.text, {}, [])}>50%</p>
              </li>
              <li className={classNames(cls.statsItem, {}, [])}>
                <p className={classNames(cls.text)}>HardSkills</p>
                <p className={classNames(cls.text, {}, [])}>???</p>
              </li>
              <li className={classNames(cls.statsItem, {}, [])}>
                <p className={classNames(cls.text)}>Steam Games</p>
                <p className={classNames(cls.text, {}, [])}>79</p>
              </li>
            </ul>
        </CommandBlock>
      </div>
  );
};
