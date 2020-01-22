import React from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import { useAuthContext } from '../../context/authProvider';

export const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { authData } = useAuthContext();
  const history = useHistory();

  const isLoggedIn = Boolean(authData);

  if (!isLoggedIn) history.push('/auth');

  return <Route {...props} />;
};
