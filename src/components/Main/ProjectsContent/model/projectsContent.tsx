import { TProjectsSection } from 'types';
import mestoProject from 'assets/images/projects/MESTO.png';
import kardoProject from 'assets/images/projects/Kardo.png';
import movieProject from 'assets/images/projects/MOVIE.png';

export const projectsData: TProjectsSection[] = [
  {
    image: mestoProject,
    title: 'Проект MESTO',
    text: `Проект MESTO, некий клон инстаграмма, где пользователь может выкладывать фото.
           Из функционала здесь присутствует: регистрация и авторизация пользователя, редактирование
           профиля, поставить или удалить лайк, создать или удалить карточку`,
    gitHubLink: 'https://github.com/VanyaGachist2/react-mesto-api-full-gha',
    type: 'Mesto',
  },
  {
    image: kardoProject,
    title: 'Проект KARDO',
    text: `Мобильного приложения Международной премии КАРДО. Данное приложение выполняется 
    в рамках Хакатона+ КАРДО. Из функционала была: верстка, регистрация и авторизация, онбординг.`,
    gitHubLink: 'https://github.com/Kirill-Begej/kardo-frontend',
    type: 'Mesto',
  },
  {
    image: movieProject,
    title: 'Проект MOVIE',
    text: `Проект MOVIE, сайт с поиском фильма по запросу. Из функционала: поиск фильма по словам,
           поиск используя фильтр, регистрация и авторизация, обновление информации о пользователе.`,
    gitHubLink: 'https://github.com/VanyaGachist2/movies-explorer-frontend',
    type: 'Movie',
  },
  {
    image: mestoProject,
    title: 'Проект портфолио',
    text: `Проект портфолио, где представленна информация обо мне: стек технологий, где учился,
           резюме.`,
    gitHubLink: 'https://github.com/VanyaGachist2/portfolio',
    type: 'Portfolio',
  },
];
