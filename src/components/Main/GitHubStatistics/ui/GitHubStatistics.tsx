import { classNames } from 'utils/classNames/classNames';
import GitHubCalendar from 'react-github-calendar';
import cls from './GitHubStatistics.module.css';

export const GitHubStatistics = () => {
  return (
    <div className={classNames(cls.github, {}, [])}>
      <a
        href='https://github.com/VanyaGachist2'
        target='_blank'
        className={classNames(cls.statsHeading, {}, [])} rel="noreferrer"
      >GitHub</a>
      <GitHubCalendar
        username='VanyaGachist2'
        blockSize={16}
        blockMargin={6}
        fontSize={16}
      />
    </div>
  );
};
