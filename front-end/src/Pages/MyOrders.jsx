import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Components/Navbar';
import OrderCard from '../Components/OrderCard';
import { getUser } from '../Utils/LocalStorage';
import { getRequest } from '../Utils/axios';

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const { id } = getUser();
    const request = async () => {
      const response = await getRequest(`/sales/${id}`);
      setOrders(response);
    };
    request();
  }, []);
  return (
    <div>
      <Navbar />
      {
        orders.map((e) => (
          <OrderCard
            key={ e.id }
            id={ e.id }
            status={ e.status }
            saleDate={ e.saleDate }
            totalPrice={ e.totalPrice }
          />
        ))
      }
    </div>
  );
}
MyOrders.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default MyOrders;