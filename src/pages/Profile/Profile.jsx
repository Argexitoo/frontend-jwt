import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../../services/api.service';

function Profile() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    apiService
      .getProfile()
      .then(response => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <strong>Name:</strong>
      <p>{user.name}</p>
      <strong>Location:</strong>
      <p>{user.location}</p>
      <strong>Age:</strong>
      <p>{user.age}</p>
      <Link to={`/profile/${user._id}`}>
        <button>Edit</button>
      </Link>
    </>
  );
}

export default Profile;
