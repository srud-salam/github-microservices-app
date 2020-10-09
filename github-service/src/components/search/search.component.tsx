import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { ISearchProps } from "./search.props";
import useStyles from "./search.style";

const Search: React.FC<ISearchProps> = (props: ISearchProps) => {
  const styles = useStyles();

  return (
    <TextField
      className={styles.input}
      label="Search for repos..."
      type="search"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default Search;
