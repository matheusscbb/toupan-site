import React from 'react';

import { convertPrice } from '../../helpers/utils/Function'


const OrderComponent = (props) => {
  const { order } = props

  return (
    <div className="OrderComponent">
      <table className="OrderComponent__products--table">
        <thead>
          <tr>
            <td>Produto</td>
            <td>Preço</td>
            <td>Quantidade</td>
            <td>Total</td>
          </tr>
        </thead>

        <tbody>
          {order.products.map((product, index) => {
            return (
              <tr key={`order-product-${index}`}>
                <td>
                  <div className="OrderComponent__products--view">
                    <img src={`../assets/images/${product.img}`} alt="imagem do produto" />
                    <div>
                      {product.name}
                      <button>Excluir</button>
                    </div>
                  </div>
                </td>
                <td>{convertPrice(product.price)}</td>
                <td>+ {product.quantity} -</td>
                <td>{convertPrice(product.price * product.quantity)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p>Método de entrega</p>
      <input />
    </div>
  )
}

export default OrderComponent;