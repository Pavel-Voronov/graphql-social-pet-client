import gql from 'graphql-tag';

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
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
