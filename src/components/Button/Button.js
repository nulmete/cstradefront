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

const ButtonSubmit = () => {
  const style = useStyles();

  return (
    <div>
      <Button className={style.root} variant="contained" color="primary">
        Buscar
      </Button>
    </div>
  );
};

export default ButtonSubmit;
