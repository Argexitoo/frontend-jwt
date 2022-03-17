import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../services/api.service';

function UserProfile() {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiService
      .getUserProfile(id)
      .then(response => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      {user.map(user => {
        return (
          <>
            <p>{user.name}</p>
            <p>{user.age}</p>
          </>
        );
      })}
    </>
  );
}

export default UserProfile;
