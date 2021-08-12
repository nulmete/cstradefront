import React from 'react';

const Home = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <button type="button" onClick={handleClick}>
      click
    </button>
  );
};

export default Home;
