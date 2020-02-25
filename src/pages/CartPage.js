import React from 'react';

import ToupanLayout from "../layouts/ToupanLayout/ToupanLayout";
import BannerLayoutContainer from '../containers/BannerLayoutContainer/BannerLayoutContainer';
import CartContainer from '../containers/CartContainer/CartContainer';


const CartPage = () => {
  return (
    <>
      <ToupanLayout>
        <BannerLayoutContainer
         title="Carrinho"
         auxiliarClass="inside--container"
         style={{ textAlign: 'left', padding: '30px 0 10px' }}
        />

        <CartContainer />
      </ToupanLayout>
    </>
  );
}

export default CartPage;
