import PropTypes from 'prop-types';
import React from 'react';
import { deleteRequest, getRequest } from '../Utils/axios';
import StyledTableOrder from './CSS/StyledTableOrder';
import Button from './Button';

export default function UserTable({ users, updateUsers, filterUser }) {
  const deleteUser = async (id) => {
    await deleteRequest(`/admin/delete/${id}`);
    const response = await getRequest('/users');
    return updateUsers(filterUser(response));
  };

  return (
    <StyledTableOrder>
      <table>
        <thead>
          <tr>
            <th>
              Item
            </th>
            <th>
              Nome
            </th>
            <th>
              E-mail
            </th>
            <th>
              Tipo
            </th>
            <th id="excluir">
              Excluir
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={ index }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${index}` }
              >
                {user.name}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${index}` }
              >
                {user.email}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${index}` }
              >
                {user.role}
              </td>
              <td>
                <Button
                  textColor="white"
                  backgroundColor="darkred"
                  border="none"
                  text="Remover"
                  onClick={ async () => deleteUser(user.id) }
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableOrder>
  );
}

UserTable.propTypes = {
  updateUsers: PropTypes.func,
  users: PropTypes.array,
}.isRequired;
