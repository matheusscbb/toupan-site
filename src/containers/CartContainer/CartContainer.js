import React from 'react';

import OrderComponent from '../../components/OrderComponent/OrderComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponents';

import { convertPrice } from '../../helpers/utils/Function'

import { cart } from '../../services/mocks/mocks';


const CartContainer = () => {
  return (
    <>
      <div className="CartContainer__cart--area inside--container">
        <div className="CartContainer__resume--area left--area">
          <h3>CEP da entrega</h3>
          <p className="subtitle">
            Este CEP só será usado como uma base para o calculo. 
            O Valor oficial terá como base o um de seus endereços cadastrados
          </p>

          <div className="box-group">
            <input className="form-control CartContainer__address--input" placeholder="13080-270" />
            <span className="CartContainer__address--line">Rua xpto, Vinhedo (SP)</span>
          </div>

          <h3>Lojas e itens escolhidos</h3>

          {cart.orders.map((order, index) => {
            return (
              <>
                <h5>{`Encomenda #${index+1} - ${order.unityName}`}</h5>
                <div className="box-group" key={`order-${index}`}>
                  <OrderComponent order={order} />
                </div>
              </>
            )
          })}

          <ButtonComponent className="primary">
            Finalizar compra
          </ButtonComponent>
        </div>

        <div className="right--area">
          <h3>Reumo</h3>

          <div className="box-group">
            <table>
              <tr>
                <td>Itens</td>
                <td>{convertPrice(cart.totalProductsPrice)}</td>
              </tr>
              <tr>
                <td>Fretes</td>
                <td>{convertPrice(cart.totalDeliveryPrice)}</td>
              </tr>
              <tr>
                <td>Cupom</td>
                <td>- {convertPrice(cart.promotion)}</td>
              </tr>
              <tr>
                <td colSpan={2}><div className="separator"/></td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{convertPrice(cart.totalCart)}</td>
              </tr>
            </table>

            <ButtonComponent className="primary">
              Finalizar compra
            </ButtonComponent>
          </div>
          
          <h3>Cupons</h3>

          <div className="CartContainer__coupon--area box-group">
            <input className="form-control" placeholder="Código do cumpom" />

            <ButtonComponent className="primary">
              Adicionar
            </ButtonComponent>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartContainer;
