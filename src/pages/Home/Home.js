import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import SearchBar from '../../components/SearchBar/SearchBar';
import ButtonSubmit from '../../components/Button/Button';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <SearchBar />
      <ButtonSubmit onClick={() => setCount((c) => c + 1)} />
    </Layout>
  );
};

export default Home;
