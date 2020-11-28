import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      margin: '4px 0',
      width: "100%",
      backgroundColor: "rgb(250,250,250)",
    },
  },
}));

export function Email({type, name, onChange, value}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        size="small"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </form>
  );
}
