import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { WithRolesGuard } from '../../hocs/rolesGuard';
import { ROLES } from '../../shared/constants';
import { useAuthContext } from '../../context/authProvider';

const { ADMIN } = ROLES;

export const routes = [
  {
    path: '/categories',
    name: 'CATEGORIES',
  },
];

const CreateCategoryNavItem = WithRolesGuard(
  () => (
    <li key="CREATE_CATEGORY">
      <NavLink to="/categories/new">Category +</NavLink>
    </li>
  ),
  {
    roles: [ADMIN],
    hide: true,
    redirect: false,
  },
);

export const MainNavigation: React.FC = () => {
  const { authData, onLogOut } = useAuthContext();

  const renderAuth = () => {
    if (authData)
      return (
        <li key="LOG_OUT">
          <Button type="danger" htmlType="button" onClick={onLogOut}>
            Log out
          </Button>
        </li>
      );

    return (
      <li key="AUTH">
        <NavLink to="/auth">AUTH</NavLink>
      </li>
    );
  };

  return (
    <ul>
      {routes.map(route => (
        <li key={route.name}>
          <NavLink to={route.path}>{route.name}</NavLink>
        </li>
      ))}
      <CreateCategoryNavItem />
      {renderAuth()}
    </ul>
  );
};
