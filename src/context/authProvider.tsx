import React, { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { WebStorage } from '../shared/webStorage';

const initialAuthData = null;

export const AuthContext = createContext({
  authData: initialAuthData,
  onLogIn: (accessToken: any) => null,
  onLogOut: () => null,
});

export const AuthProvider = (props: any) => {
  const [authData, setAuthData] = useState(initialAuthData);

  useEffect(() => setAuthData(WebStorage.getAuthData()), []);

  const onLogOut = () => {
    WebStorage.removeAccessToken();
    setAuthData(initialAuthData);
  };

  const onLogIn = (accessToken: any) => {
    WebStorage.setAccessToken(accessToken);
    setAuthData(WebStorage.getAuthData());
  };

  const authDataContextValue = useMemo(() => ({ authData, onLogIn, onLogOut }), [authData]);

  return <AuthContext.Provider value={authDataContextValue} {...props} />;
};

export const useAuthContext = () => useContext(AuthContext);
