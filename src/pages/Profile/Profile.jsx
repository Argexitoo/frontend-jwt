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
      <div className="grid place-items-end mr-4 mt-4">
        <Link to={`/profile/${user._id}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
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
          <p className="mt-1 border rounded-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, molestiae! Itaque pariatur ad maxime
            beatae commodi ipsa tempore quisquam excepturi! Assumenda delectus reiciendis ex aliquam, itaque et ipsa.
            Eveniet, qui!
          </p>
        </div>
      </div>
      <Link to={`/profile/users`}>Users</Link>
    </>
  );
}

export default Profile;
