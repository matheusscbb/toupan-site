import React from 'react';

import { convertPrice } from '../../helpers/utils/Function'


const PriceComponent = (props) => {
  const { price, installmentNumber } = props

  return (
    <div className="PriceComponent">
      <p>{convertPrice(price)}</p>
      <span>ou {installmentNumber}x {convertPrice(parseFloat(price)/parseFloat(installmentNumber))}</span>
    </div>
  )
}

export default PriceComponent;