import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROLES } from '../shared/constants';
import { WebStorage } from '../shared/webStorage';

interface IOptions {
  roles: ROLES[];
  redirect?: boolean;
  hide?: boolean;
}

export const WithRolesGuard = (ComposedComponent: any, options: IOptions) => {
  const RolesGuard: React.FC = (props: any) => {
    const history = useHistory();
    const { roles, redirect, hide } = options;

    const authData = WebStorage.getAuthData();
    if (!authData || !roles.includes(authData.role)) {
      if (redirect) history.push('/auth');
      if (hide) return null;
    }

    return <ComposedComponent {...props} />;
  };

  return RolesGuard;
};
