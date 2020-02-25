import React from 'react';

import ToupanLayout from "../layouts/ToupanLayout/ToupanLayout";
import MainBannerComponent from '../containers/BannerLayoutContainer/components/MainBannerComponent';
import CardProductContainer from '../containers/CardProductContainer/CardProductContainer';

const HomePage = () => {
  return (
    <>
      <ToupanLayout>
        <MainBannerComponent />

        {/* ajustar essa area para um container para evitar style ou css em page */}
        <section className="inside--container" style={{ backgroundColor: 'white'}}>
          <h3 style={{ margin: 0, padding: '1em 0' }}>Últimos modelos visitados</h3>

          <CardProductContainer />
        </section>
      </ToupanLayout>
    </>
  );
}

export default HomePage;
