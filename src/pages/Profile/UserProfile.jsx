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
      <div className="grid place-items-end mr-4 mt-4"></div>
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
    </>
  );
}

export default UserProfile;
