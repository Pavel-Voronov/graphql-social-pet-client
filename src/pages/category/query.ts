import gql from 'graphql-tag';

export const GET_CATEGORY = gql`
  query categoryDetails($id: String!) {
    category(id: $id) {
      id
      title
      rooms {
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
  }
`;
