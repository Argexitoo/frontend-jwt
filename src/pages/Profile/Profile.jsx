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
      <div className="card-profile">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stickpng.com%2Fimg%2Ficons-logos-emojis%2Fusers%2Fyoung-user-icon&psig=AOvVaw0k2ka5ZjpIKjkt6Wut32hp&ust=1647102661735000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCPC4q9q9vvYCFQAAAAAdAAAAABAE"
          alt=""
        />
        <strong className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
          Name:
        </strong>
        <p>{user.name}</p>
        <strong className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
          Location:
        </strong>
        <p>{user.location}</p>
        <strong className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
          Age:
        </strong>
        <p>{user.age}</p>
        <Link to={`/profile/${user._id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </>
  );
}

export default Profile;
