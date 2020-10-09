import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Typography, CircularProgress } from "@material-ui/core";
import { useDebounce } from "use-debounce";

import { SEARCH_FOR_REPOS } from "../../queries";
import Repository from "./repository.components";
import useStyles from "./repository.styles";
import { IRepositoryListProps } from "./repository.props";

const RepositoryList: React.FC<IRepositoryListProps> = (
  props: IRepositoryListProps
) => {
  const styles = useStyles();
  const [expandedRepo, setExpandedRepo] = useState(null);
  const [debouncedSearchTerm] = useDebounce(props.searchTerm, 1000);
  const { data, loading, error } = useQuery(SEARCH_FOR_REPOS, {
    variables: { search_term: debouncedSearchTerm },
  });

  useEffect(() => {
    setExpandedRepo(null);
  }, [data]);

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
    <div>
      {data.search.edges.map((repo: any, i: any) => (
        <Repository
          repo={repo}
          expanded={expandedRepo === i}
          onToggled={() => setExpandedRepo(i)}
          key={i}
        />
      ))}
    </div>
  );
};

export default RepositoryList;
