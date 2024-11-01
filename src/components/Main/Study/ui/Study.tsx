import { NavBarContent } from 'components/Main/NavBarContent';
import { classNames } from 'utils/classNames/classNames';
import { ProjectsContent } from 'components/Main/ProjectsContent';
import { RefObject, useState } from 'react';
import { TProjectsSection } from 'types';
import SpliteText from 'utils/spliteText/spliteText';
import cls from './Study.module.css';

interface IStudyData {
  className?: string;
  data: TProjectsSection[];
  isDark: boolean;
  refer: RefObject<HTMLElement>
}
export const Study = ({
  className, data, isDark, refer,
}: IStudyData) => {
  const [filter, setFilter] = useState('Mesto');

  return (
    <section id='#projects' ref={refer} className={classNames(cls.section, {}, [className])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <SpliteText>Projects</SpliteText>
        <NavBarContent
          isDark={isDark}
          titles={['Mesto', 'KARDO', 'Movie', 'Portfolio', 'Blog']}
          setFilter={setFilter}
        />
        <ProjectsContent isDark={isDark} data={data} filter={filter} />
      </div>
    </section>
  );
};
