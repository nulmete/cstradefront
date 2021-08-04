import Grid from '@material-ui/core/Grid';
import React from 'react';
import ResponsiveDrawer from '../../components/Drawer/ResponsiveDrawer';
import SearchBar from '../../components/SearchBar/SearchBar';
import useHomeStyles from './HomeStyles';

const Home = () => {
  const styles = useHomeStyles();

  return (
    <div>
      {/* <ResponsiveDrawer />
    <div>
      <SearchBar />
    </div> */}
      <Grid container spacing={2}>
        <Grid className={styles.gridItem} item xs={12}>
          <div>asd</div>
        </Grid>
        <Grid className={styles.gridItem} item xs={6}>
          <div>asd</div>
        </Grid>
        <Grid className={styles.gridItem} item xs={6}>
          <div>asd</div>
        </Grid>
        <Grid className={styles.gridItem} item xs={3}>
          <div>asd</div>
        </Grid>
        <Grid className={styles.gridItem} item xs={3}>
          <div>asd</div>
        </Grid>
        <Grid className={styles.gridItem} item xs={3}>
          <div>asd</div>
        </Grid>
        <Grid className={styles.gridItem} item xs={3}>
          <div>asd</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
