/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
}));

const ButtonSubmit = (props) => {
  const style = useStyles();

  return (
    <div>
      <Button
        {...props}
        className={style.root}
        variant="contained"
        color="primary"
      >
        Buscar
      </Button>
    </div>
  );
};

export default ButtonSubmit;
