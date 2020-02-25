import React from 'react';

import HeaderBarContainer from '../../containers/HeaderContainer/HeaderContainer';


const ToupanLayout = ({ children }) => {
  return (
    <>
      <HeaderBarContainer />
      {children}
    </>
  );
}

export default ToupanLayout;
