import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../../services/api.service';

function UpdateDog() {
  const { id } = useParams();
  const [dog, setDog] = useState({
    name: '',
    sex: '',
    race: '',
    age: '',
    size: '',
    image: '',
  });

  const navigate = useNavigate();

  const dogId = async () => {
    const response = await apiService.getDogId(id);
    setDog(response.data);
  };

  useEffect(() => {
    dogId();
  }, []);

  const handleOnChange = e => {
    setDog(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    apiService
      .updateDog(dog._id, {
        name: dog.name,
        sex: dog.sex,
        race: dog.race,
        age: dog.age,
        size: dog.size,
        image: dog.image,
      })
      .then(response => {
        console.log(response);
        navigate('/dogs/views');
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" value={dog.name} onChange={handleOnChange} placeholder="Name" />
        <label>Sex</label>
        <input name="sex" type="text" value={dog.sex} onChange={handleOnChange} placeholder="Sex" />
        <label>Size</label>
        <input name="size" type="text" value={dog.size} onChange={handleOnChange} placeholder="Size" />
        <label>Race</label>
        <input name="race" type="text" value={dog.race} onChange={handleOnChange} placeholder="Race" />
        <label>Age</label>
        <input name="age" type="text" value={dog.age} onChange={handleOnChange} placeholder="Age" />
        <label>Image</label>
        <input name="image" type="text" value={dog.image} onChange={handleOnChange} placeholder="Image" />
        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default UpdateDog;
