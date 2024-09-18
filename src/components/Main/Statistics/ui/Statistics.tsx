import cls from './Statistics.module.css';
import { classNames } from 'utils/classNames/classNames';
import Age from 'utils/stats/stats';

interface IStatisticsData {
  className?: string;
}

export const Statistics = ({ className }: IStatisticsData) => {
  return (
      <div className={classNames(cls.moreInfo, {}, [className])}>
        <h3 className={classNames(cls.statsHeading)}>Statistics</h3>
        <ul className={classNames(cls.stats, {}, [])}>
          <li className={classNames(cls.statsItem, {}, [])}>
            <p className={classNames(cls.current)}>Current Age</p>
            <p className={classNames(cls.current, {}, [])}>
              <Age />
            </p>
          </li>
          <li className={classNames(cls.statsItem, {}, [])}>
            <p className={classNames(cls.current)}>Main City</p>
            <p className={classNames(cls.current, {}, [])}>Simferopol</p>
          </li>
          <li className={classNames(cls.statsItem, {}, [])}>
            <p className={classNames(cls.current)}>SoftSkills</p>
            <p className={classNames(cls.current, {}, [])}>50%</p>
          </li>
          <li className={classNames(cls.statsItem, {}, [])}>
            <p className={classNames(cls.current)}>HardSkills</p>
            <p className={classNames(cls.current, {}, [])}>???</p>
          </li>
          <li className={classNames(cls.statsItem, {}, [])}>
            <p className={classNames(cls.current)}>Steam Games</p>
            <p className={classNames(cls.current, {}, [])}>79</p>
          </li>
        </ul>
      </div>
  )
}