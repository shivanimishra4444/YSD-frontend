import React from 'react';
import UserDetail from './UserDetail';
import { Link, withRouter } from 'react-router-dom';
import { header } from '../const';

const UserListItem = ({ user, history }) => {
  const handleClick = e => {
    event.preventDefault();
    history.push(`/user/${user.id}`);
  };
  return (
    <tbody>
      <tr key={user.id} onClick={() => handleClick()}>
        <td data-th={header.Name} key={user.name}>
          {`  ${user.name}`}
        </td>
        <td data-th={header.Username} key={user.username}>
          {`  ${user.username}`}
        </td>
        <td data-th={header.Email} key={user.email}>
          {`  ${user.email}`}
        </td>
        <td data-th={header.PhoneNumber} key={user.phone}>
          {`  ${user.phone}`}
        </td>
        <td data-th={header.Company} key={user.company.name}>
          {`  ${user.company.name}`}
        </td>
      </tr>
    </tbody>
  );
};

export default withRouter(UserListItem);
