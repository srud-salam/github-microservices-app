import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  flexContainer: {
    display: "flex",
    marginTop: "1rem",
    flexDirection: "column",
    marginBottom: "1rem",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
    border: "1px red",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0.5rem",
  },
  chip: {
    marginLeft: "0.5rem",
  },
  note: {
    marginTop: "1rem",
    textAlign: "center",
  },
  spinnerContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "1rem",
  },
});

export default useStyles;
