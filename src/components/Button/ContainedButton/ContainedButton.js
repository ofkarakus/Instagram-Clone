import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      margin: "10px 0 5px",
      backgroundColor: props => props.backgroundColor,  
      boxSizing: "border-box",
      textTransform: 'none',
      fontWeight: 'bold',
      "&:hover": {
        backgroundColor: "rgb(0,149,246)",
      },
    },
  },
}));
 
export function ContainedButton({type, text, backgroundColor, startIcon}) {

  const props = { backgroundColor: backgroundColor }
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Button startIcon={startIcon} type={type} fullWidth variant="contained" color="primary">
        {text}
      </Button>
    </div>
  );
}
