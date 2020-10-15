import React from "react";
import { Chip } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import RestaurantIcon from "@material-ui/icons/Restaurant";

import useStyles from "./repository.styles";
import { IRepositoryProps } from "./repository.props";

const RepositoryComponent: React.FC<IRepositoryProps> = (
  props: IRepositoryProps
) => {
  const styles = useStyles();
  const {
    id,
    name,
    url,
    stargazers: { totalCount: totalStarCount },
    forks: { totalCount: totalForkCount },
  } = props.repo;

  return (
    <div className={styles.flexContainer} key={"container_" + id}>
      <div className={styles.flexRow} key={"row_" + id}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
        <div>
          <Chip
            label={totalStarCount}
            avatar={<StarIcon />}
            className={styles.chip}
          />
          <Chip
            label={totalForkCount}
            avatar={<RestaurantIcon />}
            className={styles.chip}
          />
        </div>
      </div>
    </div>
  );
};

export default RepositoryComponent;
