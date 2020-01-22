import { ApolloLink } from 'apollo-link';

export const logLink = new ApolloLink((operation, forward): any => {
  console.log('REQUEST-MIDDLEWARE');
  operation.setContext((data: any) => data);
});
