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
    <ul className={classNames(cls.content, {}, [className])}>
      {(filter === 'Mesto' || filter === 'KARDO' || filter === 'Movie' || filter === 'Portfolio') ? (
        data.map((c, i) => (
          <li className={classNames(cls.item, {}, [])} key={i}>
            <div className={classNames(cls.block, {}, [])}>
              <img className={classNames(cls.image, {}, [])} src={c.image} alt={c.title} />
            </div>
            <div className={classNames(cls.info, {}, [])}>
              <h3 className={classNames(cls.heading, {}, [])}>{c.title}</h3>
              <p className={classNames(cls.text, {}, [])}>{c.text}</p>
              <a target='_blank' href={c.gitHubLink} className={classNames(cls.link, {}, [])} rel="noreferrer">GitHub</a>
            </div>
          </li>
        ))
      ) : (filter === 'Blog' ? (
        <li className={classNames(cls.liitem, {}, [])}>
          <h3 className={classNames(cls.nothing, {}, [])}>В разработке</h3>
        </li>
      ) : null)}
    </ul>
  );
};
