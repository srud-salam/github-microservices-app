import React from "react";
import { useDebounce } from "use-debounce";
import { useQuery } from "@apollo/react-hooks";
import { Typography, CircularProgress } from "@material-ui/core";

import { SEARCH_FOR_REPOS } from "../../github/github.graphql.queries";
import { IRepositoryListProps } from "./repository.props";
import RepositoryComponent from "./repository.components";
import useStyles from "./repository.styles";

const RepositoryList: React.FC<IRepositoryListProps> = (
  props: IRepositoryListProps
) => {
  const styles = useStyles();
  const [debouncedSearchTerm] = useDebounce(props.searchTerm, 1000);
  const { data, loading, error } = useQuery(SEARCH_FOR_REPOS, {
    variables: { search_term: debouncedSearchTerm },
  });

  if (loading) {
    return (
      <div className={styles.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography
        variant={"overline"}
        className={styles.note}
        component={"div"}
        color={"error"}
      >
        {error}
      </Typography>
    );
  }

  if (!data.search.repositoryCount) {
    return (
      <Typography
        variant={"overline"}
        className={styles.note}
        component={"div"}
      >
        There are no such repositories!
      </Typography>
    );
  }

  return (
    <div data-testid="repositories-container">
      {data.search.edges.map((repo: any) => (
        <RepositoryComponent repo={repo.node} key={repo.node.id} />
      ))}
    </div>
  );
};

export default RepositoryList;
