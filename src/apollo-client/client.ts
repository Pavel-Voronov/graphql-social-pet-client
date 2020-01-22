import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { authLink, httpLink, errorLink, logLink } from './middlewares';

export const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink, errorLink, logLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
