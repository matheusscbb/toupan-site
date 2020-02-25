import React from "react";

import PriceComponent from "../../components/PriceComponent/PriceComponent";
import TitleComponent from "../../components/TitleComponent/TitleComponent";

import { products } from "../../services/mocks/mocks";

const CardProductContainer = () => {
  return (<section className="CardProductContainer grid-row">
    {products.map((product, index) => (
      <div className="grid-item" key={`product-card-${index}`}>
        <img
          src={`../assets/images/${product.img}`}
          alt={product.name}
        />

        <TitleComponent
          title={product.name}
          subtitle={product.description}
        />

        <PriceComponent price={product.price} installmentNumber={product.installmentNumber} />
      </div>
    ))}
  </section>)
};

export default CardProductContainer;
