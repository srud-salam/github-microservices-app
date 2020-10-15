import gql from "graphql-tag";

export const SEARCH_FOR_REPOS = gql`
  query($search_term: String!) {
    search(query: $search_term, type: REPOSITORY, first: 20) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            url
            descriptionHTML
            owner {
              login
            }
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
          }
        }
      }
    }
  }
`;
