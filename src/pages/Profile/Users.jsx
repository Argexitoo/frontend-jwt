import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
              <Link to={`/profile/${user._id}/info`}>{user.name}</Link>
            </li>
          </>
        );
      })}
    </>
  );
}

export default Users;
