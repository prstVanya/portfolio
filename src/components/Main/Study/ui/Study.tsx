import { NavBarContent } from 'components/Main/NavBarContent';
import { classNames } from 'utils/classNames/classNames';
import { ProjectsContent } from 'components/Main/ProjectsContent';
import { useState } from 'react';
import { TProjectsSection } from 'types';
import cls from './Study.module.css';

interface IStudyData {
  className?: string;
  data: TProjectsSection[];

}
export const Study = ({ className, data }: IStudyData) => {
  const [filter, setFilter] = useState('Mesto');

  return (
    <section className={classNames(cls.section, {}, [className])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <h1 className={classNames(cls.title, {}, [])}>Projects</h1>
        <NavBarContent titles={['Mesto', 'KARDO', 'Movie', 'Portfolio', 'Blog']} setFilter={setFilter} />
        <ProjectsContent data={data} filter={filter} />
      </div>
    </section>
  );
};
