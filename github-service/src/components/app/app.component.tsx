import React, { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Container, Typography } from "@material-ui/core";

import SearchBar from "../search/search.component";
import RepositoryList from "../repository/repository.container";
import useStyles from "./app.styles";
import client from "../../client";

const App: React.FC = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ApolloProvider client={client}>
      <Container maxWidth={"sm"}>
        <Typography variant={"h3"} className={classes.title}>
          GitHub GraphQL API
        </Typography>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <RepositoryList searchTerm={searchTerm} />
      </Container>
    </ApolloProvider>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
