import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
      <div className="grid place-items-start mt-8 ml-4">
        {user.image === undefined || user.image === '' ? (
          <img
            key={user.image}
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            width="50%"
            className="border rounded-full"
          />
        ) : (
          <img src={user.image} alt="Avatar" width="50%" className="border rounded-full" />
        )}
        <div>
          <h4 className="mt-6">
            <b>
              {user.name},{user.age}
            </b>
          </h4>
          <p className="mt-1">{user.location}</p>
          <h4 className="mt-1">About me...</h4>
          <p className="mt-1 border rounded-lg">{user.description}</p>
          <div className="mt-2 bg-button mt-2 w-35 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            <Link to={`/dogs/users/${id}`}>Dogs</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
