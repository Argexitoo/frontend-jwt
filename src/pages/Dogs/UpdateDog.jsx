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
    const response = await apiService.getDog(id);
    console.log(response.data);
    setDog(response.data);
  };

  useEffect(() => {
    dogId();
  }, [id]);

  const handleDelete = async () => {
    try {
      await apiService.deleteDog(id);
      navigate('/dogs/views');
    } catch (error) {
      console.log(error);
    }
  };

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
      .updateDog(id, {
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
        <input
          name="name"
          type="text"
          value={dog.name}
          onChange={handleOnChange}
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Sex</label>
        <input
          name="sex"
          type="text"
          value={dog.sex}
          onChange={handleOnChange}
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Size</label>
        <input
          name="size"
          type="text"
          value={dog.size}
          onChange={handleOnChange}
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Race</label>
        <input
          name="race"
          type="text"
          value={dog.race}
          onChange={handleOnChange}
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Age</label>
        <input
          name="age"
          type="text"
          value={dog.age}
          onChange={handleOnChange}
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Image</label>
        <input
          name="image"
          type="text"
          value={dog.image}
          onChange={handleOnChange}
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <div className="flex space-x-4">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdateDog;
