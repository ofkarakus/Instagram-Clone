import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      margin: '5px 0',
      textTransform: 'none',
      fontWeight: props => props.fontWeight,
      color: props => props.color,
    },
    textAlign: 'center',
  },
}));

export function TextButton({startIcon, btnText, fontWeight, color}) {
  
  const props = { color: color, fontWeight: fontWeight }
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Button startIcon={startIcon}>{btnText}</Button>
    </div>
  );
}