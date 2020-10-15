import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/react-hooks";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`,
    },
  }),
});

export default client;
