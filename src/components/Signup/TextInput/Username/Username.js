import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      margin: "15px 0 5px",
      width: "100%",
      backgroundColor: "rgb(250,250,250)",
    },
  },
}));

export function Username({type, name, onChange, value}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        size="small"
        id="outlined-basic"
        label="Username"
        variant="outlined"
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </form>
  );
}
