import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../../services/api.service';

function UpdateProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [profile, setProfile] = useState({
    name: '',
    location: '',
    age: '',
    image: '',
  });

  const userId = async () => {
    const response = await apiService.getProfile(id);
    console.log(response.data);
    setProfile(response.data);
  };

  useEffect(() => {
    userId();
  }, [id]);

  const handleOnChange = e => {
    setProfile(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    apiService
      .updateProfile(id, {
        name: profile.name,
        location: profile.location,
        age: profile.age,
        image: profile.image,
      })
      .then(response => {
        console.log(response);
        navigate('/profile');
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <div className="grid place-items-center mt-8">
        <img src="../dog-event.png" alt="" width="130" />
        <h1 className="mt-4 mb-4">Update your profile!</h1>
      </div>
      <form onSubmit={handleSubmit} className="grid place-items-center">
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={profile.name}
          onChange={handleOnChange}
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Location</label>
        <input
          name="location"
          type="text"
          value={profile.location}
          onChange={handleOnChange}
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Age</label>
        <input
          name="age"
          type="text"
          value={profile.age}
          onChange={handleOnChange}
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Image</label>
        <input
          name="image"
          type="text"
          value={profile.image}
          onChange={handleOnChange}
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </form>
    </>
  );
}

export default UpdateProfile;
