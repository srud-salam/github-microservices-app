import React from "react";
import StarIcon from "@material-ui/icons/Star";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import { Chip } from "@material-ui/core";
import useStyles from "./repository.styles";
import { IRepositoryProps } from "./repository.props";

const Repository: React.FC<IRepositoryProps> = (props: IRepositoryProps) => {
  const styles = useStyles();
  const {
    node: {
      name,
      url,
      stargazers: { totalCount: totalStarCount },
      forks: { totalCount: totalForkCount },
    },
  } = props.repo;

  return (
    <div className={styles.flexContainer}>
      <div className={styles.flexRow}>
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

export default Repository;
