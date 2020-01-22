import gql from 'graphql-tag';

export const CREATE_CATEGORY = gql`
  mutation createCategory($title: String!) {
    createCategory(title: $title) {
      id
      title
    }
  }
`;
