import { setContext } from 'apollo-link-context';
import { WebStorage } from '../../shared/webStorage';

export const authLink = setContext((_, { headers }) => {
  const accessToken = WebStorage.getAccessToken();

  const authHeader = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};

  return {
    headers: {
      ...headers,
      ...authHeader,
    },
  };
});
