import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '100%',
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <TextField id="standard-basic" label="Buscar..." variant="outlined" />
    </form>
  );
};

export default SearchBar;
