import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "5px 0",
      backgroundColor: "rgb(178,223,252)",
      boxSizing: "border-box",
      textTransform: 'none',
      fontWeight: 'bold',
      "&:hover": {
        backgroundColor: "rgb(0,149,246)",
      },
    },
  },
}));

export function ContainedButton({type}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button type={type} fullWidth variant="contained" color="primary">
        Log In
      </Button>
    </div>
  );
}
