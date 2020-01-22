import gql from 'graphql-tag';

export const GET_ROOM = gql`
  query roomDetails($id: String!) {
    room(id: $id) {
      id
      title
      users {
        id
        firstName
        lastName
        email
      }
      messages {
        id
        text
        author {
          id
          firstName
          lastName
          email
        }
      }
    }
  }
`;
