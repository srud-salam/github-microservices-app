import React, { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Container, Typography } from "@material-ui/core";

import useStyles from "./app.component.styles";
import SearchBar from "../search/search.component";
import RepositoryList from "../repository/repository.container";
import client from "../../github/github.graphql.client";

const App: React.FC = () => {
  const styles = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ApolloProvider client={client}>
      <Container maxWidth={"sm"}>
        <Typography variant={"h3"} className={styles.title}>
          GitHub GraphQL API
        </Typography>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <RepositoryList searchTerm={searchTerm} />
      </Container>
    </ApolloProvider>
  );
};

export default App;
