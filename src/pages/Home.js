import React from 'react';
import ResponsiveDrawer from '../components/Drawer/ResponsiveDrawer';
import SearchBar from '../components/SearchBar/SearchBar';

const Home = () => (
  <div>
    <ResponsiveDrawer />
    <div>
      <SearchBar />
    </div>
  </div>
);

export default Home;
