____
# Pet-project "Портфолио"
Репозиторий пет-проекта "портфолио". Данное приложение является тренировкой, использования новых технологий. 

____

## Содержание
- [Статус проекта](#статус-проекта)
- [Ссылка на деплой приложения](#ссылка-на-деплой-приложения)
- [Используемые технологии](#используемые-технологии)
- [Что планируется дальше](#что-планируется-дальше)
- [Установка проекта](#установка-проекта)
- [Запуск проекта](#запуск-проекта)
- [Проверка линтинга](#проверка-линтинга)
___

## Статус проекта
В разработке!
___

## Ссылка на деплой приложения
Lint githubPages: 
```
https://prstvanya.github.io/portfolio/
```
___

## Используемые технологии
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
____

## Что планируется дальше
Сейчас в проекте используется module.css, в дальнейшем перепишется на sass. 
____

## Установка проекта
Клонирование проекта SSH:
```sh
$ git clone git@github.com:prstVanya/portfolio.git
```

Установка зависимостей:
```sh
$ npm i
```
___

## Запуск проекта
Запуск проекта:
```sh
npm run start
```

development сборка:
```sh
npm run build:dev
```

production сборка: 
```sh
npm run build
```
____

## Проверка линтинга
Для проверки TypeScript-файлов используется ESLint с конфигурацией airbnb-base.

Проверка ts-файлов:
```sh
npm run lint:ts
```

Исправить ts-файлы:
```sh
npm run lint:ts:fix
```

Для проверки CSS-файлов используется Stylelint.

Проверить css-файлы:
```sh
npm run lint:css
```

Исправить css-файлы:
```sh
npm run lint:css:fix
```
___