import { FC } from 'react';
import { Home } from '../home/home';

type RouteObj = {
  path: string;
  elem: FC;
  index?: true;
};

export const createAppDesktopRoutes = (): RouteObj[] => {
  const routes: RouteObj[] = [
    { path: '/', elem: Home }
  ];

  return routes;
};
