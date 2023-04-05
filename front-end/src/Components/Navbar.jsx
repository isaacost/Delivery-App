import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser, logout } from '../Utils/LocalStorage';
import StyledNavBar from './CSS/StyledNavBar';

export default function Navbar() {
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const user = getUser();
    setUserRole(user.role);
    return setUserName(user?.name);
  }, []);

  return (
    <StyledNavBar>
      <img src="http://localhost:3001/images/Logo.svg" alt="Logo" width="75px" />
      {userRole === 'customer' && (

        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS

        </Link>

      )}
      { (userRole === 'customer' || userRole === 'seller') && (
        <Link
          to={ `/${userRole}/orders` }
          data-testid="customer_products__element-navbar-link-orders"
        >
          { userRole === 'customer' ? 'MEUS PEDIDOS' : 'PEDIDOS' }
        </Link>
      )}
      {userRole === 'administrator' && (
        <Link
          to="/admin/manage"
          data-testid="customer_products__element-navbar-link-products"
        >
          GERENCIAR USUÁRIOS

        </Link>

      )}
      <p
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { userName }
      </p>
      <Link
        to="/login"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => logout() }
      >
        SAIR
      </Link>
    </StyledNavBar>
  );
}
