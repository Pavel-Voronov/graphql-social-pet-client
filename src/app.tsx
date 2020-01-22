import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo-client/client';
import { Router } from './router';
import { AuthProvider } from './context/authProvider';

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ApolloProvider>
  );
};
