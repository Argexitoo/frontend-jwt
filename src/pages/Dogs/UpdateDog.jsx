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
      <div className="grid place-items-center mt-8">
        <img src="../favicon.png" alt="" width="130" />
        <h1 className="mt-4 mb-4">Update your dog!</h1>
      </div>
      <form onSubmit={handleSubmit} className="grid place-items-center">
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={dog.name}
          onChange={handleOnChange}
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          maxLength="10"
        />
        <label>Sex</label>
        <select
          type="text"
          name="sex"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          placeholder="Sex"
          defaultValue={dog.sex}
          onChange={handleOnChange}
        >
          <option value="" disabled>
            Sex
          </option>
          <option>Female</option>
          <option>Male</option>
        </select>
        <label>Size</label>
        <select
          type="text"
          name="size"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          placeholder="Size"
          defaultValue={dog.size}
          onChange={handleOnChange}
        >
          <option value="" disabled>
            Size
          </option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Giant</option>
        </select>
        <label>Race</label>
        <input
          name="race"
          type="text"
          value={dog.race}
          onChange={handleOnChange}
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          maxLength="10"
        />
        <label>Age</label>
        <select
          type="string"
          name="age"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          placeholder="Age"
          defaultValue={dog.age}
          onChange={handleOnChange}
        >
          <option value="" disabled>
            Age
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
        </select>
        <label>Image</label>
        <input
          name="image"
          type="text"
          value={dog.image}
          onChange={handleOnChange}
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <div className="flex space-x-4">
          <button type="submit" className="bg-button mt-2 w-35 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-button mt-2 w-35 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdateDog;
