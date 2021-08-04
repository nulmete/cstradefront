import { makeStyles } from '@material-ui/core';

const useHomeStyles = makeStyles(() => ({
  gridItem: {
    '& > div': {
      background: 'red',
      height: '200px',
    },
  },
}));

export default useHomeStyles;
