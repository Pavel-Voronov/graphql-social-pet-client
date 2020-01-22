import React from 'react';
import { BrowserRouter, Route, Switch, RouteProps } from 'react-router-dom';
import { PrivateRoute } from './components/private-route/privateRoute';
import { MainNavigation } from './components/main-navigation/mainNavigation';
import { AuthPage } from './pages/auth/auth';
import { CategoriesPage } from './pages/categories/categories';
import { CategoryPage } from './pages/category/category';
import { CreateCategoryPage } from './pages/create-category/createCategory';
import { RoomPage } from './pages/room/room';

interface IRouteProps extends RouteProps {
  key: string;
}

export const routes = [
  {
    path: '/auth',
    exact: true,
    component: AuthPage,
    private: false,
  },
  {
    path: '/categories',
    exact: true,
    component: CategoriesPage,
    private: false,
  },
  {
    path: '/categories/new',
    exact: true,
    component: CreateCategoryPage,
    private: true,
  },
  {
    path: '/categories/:categoryId',
    exact: true,
    component: CategoryPage,
    private: false,
  },
  {
    path: '/categories/:categoryId/rooms/:roomId',
    exact: true,
    component: RoomPage,
    private: false,
  },
];

export const Router: React.FC = () => {
  const items = routes.map(route => {
    const { path, component, exact } = route;
    const routeProps: IRouteProps = { path, component, exact, key: path };

    return route.private ? <PrivateRoute {...routeProps} /> : <Route {...routeProps} />;
  });

  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Switch>{items}</Switch>
      </main>
    </BrowserRouter>
  );
};
