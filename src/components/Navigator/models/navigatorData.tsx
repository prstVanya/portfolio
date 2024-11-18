interface INavigatorData {
  id: number;
  name: string;
  to: string;
}

export const navigatorProps: INavigatorData[] = [
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
