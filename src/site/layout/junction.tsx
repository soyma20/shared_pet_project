import { createAppDesktopRoutes } from './routes';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const routes = createAppDesktopRoutes();


export const LayoutJunction = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} index={route.index} path={route.path} element={<route.elem />} />
      ))}
    </Routes>
  );
};