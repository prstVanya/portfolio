import cls from './Projects.module.css';
import { classNames } from 'utils/classNames/classNames';

export const Projects = () => {
  return (
    <section className={classNames(cls.section, {}, [])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <h1 className='class'>Hello</h1>
      </div>
    </section>
  )
}