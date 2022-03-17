import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import apiService from '../../services/api.service';

function Users() {
  const [users, setUsers] = useState([{}]);
  const { id } = useParams();

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

  useEffect(() => {
    apiService
      .getUserProfile(id)
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

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
