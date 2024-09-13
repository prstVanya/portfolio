import { TProjectsSection } from 'types';
import { classNames } from 'utils/classNames/classNames';
import cls from './ProjectsContent.module.css';

interface IProjectsContent {
  className?: string;
  data: TProjectsSection[];
  filter: string;
}

export const ProjectsContent = ({ className, data, filter }: IProjectsContent) => {
  return (
    <ul className={classNames(classNames(cls.content, {}, [className]))}>
      {filter === 'Mesto' || filter === 'KARDO' || filter === 'Movie' || filter ===  'Portfolio' && data.map((c, i) => {
        return (
          <li className={classNames(cls.item, {}, [])} key={i}>
            <div className={classNames(cls.block, {}, [])}>
              <img className={classNames(cls.image, {}, [])} src={c.image} />
            </div>
            <div className={classNames(cls.info, {}, [])}>
              <h3 className={classNames(cls.heading, {}, [])}>{c.title}</h3>
              <p className={classNames(cls.text, {}, [])}>{c.text}</p>
            </div>
          </li>
        );
      })}
      {filter === 'Blog' && (
          <h3 className={classNames(cls.nothing, {}, [])}>В разработке</h3>
      )}
    </ul>
  );
};
