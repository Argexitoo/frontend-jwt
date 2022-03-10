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
      })
      .then(response => {
        console.log(response);
        navigate('/profile');
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" value={profile.name} onChange={handleOnChange} />
        <label>Location</label>
        <input name="location" type="text" value={profile.location} onChange={handleOnChange} />
        <label>Age</label>
        <input name="age" type="text" value={profile.age} onChange={handleOnChange} />
        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default UpdateProfile;
