import React, { useState } from 'react';
import { SignUp } from './signUp';
import { SignIn } from './signIn';
import { useAuthContext } from '../../context/authProvider';

export enum AUTH_MODE_TYPES {
  SIGN_IN = 'sign in',
  SIGN_UP = 'sign up',
}

export const AuthPage: React.FC = () => {
  const { onLogIn } = useAuthContext();
  const [mode, setMode] = useState(AUTH_MODE_TYPES.SIGN_IN);

  const handleSwitchMode = (nextMode: AUTH_MODE_TYPES): void => setMode(nextMode);

  const handleSignInSuccess = (data: any): void => {
    const {
      signIn: { accessToken },
    } = data;
    onLogIn(accessToken);
  };

  const handleSignUpSuccess = (data: any): void => {
    const {
      signUp: { accessToken },
    } = data;
    onLogIn(accessToken);
  };

  return (
    <>
      {mode === AUTH_MODE_TYPES.SIGN_IN ? (
        <SignIn switchMode={handleSwitchMode} handleSignInSuccess={handleSignInSuccess} />
      ) : (
        <SignUp switchMode={handleSwitchMode} handleSignUpSuccess={handleSignUpSuccess} />
      )}
    </>
  );
};
