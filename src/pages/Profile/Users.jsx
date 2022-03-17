import { useEffect, useState } from 'react';

import apiService from '../../services/api.service';

function Users() {
  const [users, setUsers] = useState([{}]);

  useEffect(() => {
    apiService
      .getAllUsers()
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {users.map(user => {
        return (
          <>
            <li>
              <a href={`/profile/${user._id}`}>{user.name}</a>
            </li>
          </>
        );
      })}
    </>
  );
}

export default Users;
