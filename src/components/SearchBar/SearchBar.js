import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <TextField
        id="standard-basic"
        label="Nombre del Skin..."
        variant="outlined"
      />
    </form>
  );
};

export default SearchBar;
