import { HttpLink } from 'apollo-link-http';

export const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
});
