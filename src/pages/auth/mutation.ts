import gql from 'graphql-tag';

export const SIGN_UP = gql`
  mutation signUp($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    signUp(data: { email: $email, password: $password, firstName: $firstName, lastName: $lastName }) {
      id
      email
      firstName
      lastName
    }
  }
`;

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(data: { email: $email, password: $password }) {
      accessToken
    }
  }
`;
