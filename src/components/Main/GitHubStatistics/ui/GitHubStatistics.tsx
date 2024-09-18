import { classNames } from 'utils/classNames/classNames';
import GitHubCalendar from 'react-github-calendar';
import cls from './GitHubStatistics.module.css';

export const GitHubStatistics = () => {
  return (
    <div className={classNames(cls.github, {}, [])}>
      <h3 className={classNames(cls.statsHeading, {}, [])}>GitHub</h3>
      <GitHubCalendar
        username='VanyaGachist2'
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </div>
  );
};
