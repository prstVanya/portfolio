interface IHeaderData {
  id: number;
  name: string;
  to: string;
}

export const headerLinks: IHeaderData[] = [
  {
    id: 1,
    name: 'About',
    to: '#about',
  },
  {
    id: 2,
    name: 'Projects',
    to: '#projects',
  },
  {
    id: 3,
    name: 'Education',
    to: '#education',
  },
];
