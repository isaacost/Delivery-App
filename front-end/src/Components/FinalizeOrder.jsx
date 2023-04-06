import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRequest, postRequest } from '../Utils/axios';
import { getUser, getProductsCart, getTotalPrice } from '../Utils/LocalStorage';
import StyledFinalizeOrder from './CSS/StyledFinalizeOrder';
import Button from './Button';

function FinalizeOrder({ history }) {
  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState(0);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const request = async () => {
      const sellerRequest = await getRequest('/sellers');
      return setSellers(sellerRequest);
    };
    request();
  }, []);

  useEffect(() => {
    setSellerId(sellers[0]?.id);
  }, [sellers]);

  async function finishOrder() {
    const { id: userId } = getUser();
    const totalPrice = getTotalPrice().replace(',', '.');

    const body = {
      userId,
      sellerId,
      deliveryAddress: address,
      deliveryNumber: number,
      totalPrice: Number(totalPrice),
      products: getProductsCart(),
    };

    const { id } = await postRequest('/sales', body);
    return history.push(`/customer/orders/${id}`);
  }

  return (
    <StyledFinalizeOrder>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        <label htmlFor="sellerName">
          Vendedor
          <select
            id="sellerName"
            data-testid="customer_checkout__select-seller"
            onChange={ ({ target }) => setSellerId(target.value) }
          >
            { sellers.map(({ id, name }, index) => (
              <option key={ index } value={ id }>{ name }</option>
            )) }
          </select>
        </label>
        <label htmlFor="input-address">
          Endereço
          <input
            type="text"
            id="input-address"
            data-testid="customer_checkout__input-address"
            onChange={ ({ target }) => setAddress(target.value) }
          />
        </label>
        <label htmlFor="input-number">
          Número
          <input
            type="text"
            id="input-number"
            data-testid="customer_checkout__input-address-number"
            onChange={ ({ target }) => setNumber(target.value) }
          />
        </label>
      </form>
      <Button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => finishOrder() }
        text="FINALIZAR PEDIDO"
        backgroundColor="#80c423"
      />
    </StyledFinalizeOrder>
  );
}

FinalizeOrder.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default FinalizeOrder;
