import React, { useState, useEffect } from 'react';

import { fetchUsersList } from '../Model/model';
import UserListItem from './UserListItem';
import Loader from './Loader';
import { header } from '../const';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const result = await fetchUsersList();
    setUsers(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return !loading ? (
    <table className="userlist-table">
      <thead>
        <tr>
          <th>{header.Name}</th>
          <th>{header.Username}</th>
          <th>{header.Email}</th>
          <th>{header.PhoneNumber}</th>
          <th>{header.Company}</th>
        </tr>
      </thead>
      {users.data.map(user => (
        <UserListItem user={user} key={user.id} />
      ))}
    </table>
  ) : (
    <Loader />
  );
};

export default UserList;
