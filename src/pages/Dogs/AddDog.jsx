import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../../services/api.service';

function AddDog() {
  const [form, setForm] = useState({
    name: '',
    sex: '',
    race: '',
    age: '',
    size: '',
    image: '',
  });

  const navigate = useNavigate();

  const handleForm = e => {
    e.persist();
    setForm(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    apiService
      .addNewDog(form)
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
        <h1 className="mt-4 mb-4">Add a new dog!</h1>
      </div>
      <form onSubmit={handleSubmit} className="grid place-items-center">
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleForm}
          placeholder="Name"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          maxLength="15"
        />

        <select
          type="text"
          name="sex"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          placeholder="Sex"
          defaultValue={form.sex}
          onChange={handleForm}
        >
          <option value="" disabled>
            Sex
          </option>
          <option>Female</option>
          <option>Male</option>
        </select>

        <select
          type="text"
          name="size"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          placeholder="Size"
          defaultValue={form.size}
          onChange={handleForm}
        >
          <option value="" disabled>
            Size
          </option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Giant</option>
        </select>

        <input
          name="race"
          type="text"
          value={form.race}
          onChange={handleForm}
          placeholder="Race"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />

        <select
          type="string"
          name="age"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          placeholder="Age"
          defaultValue={form.age}
          onChange={handleForm}
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

        <input
          name="image"
          type="text"
          value={form.image}
          onChange={handleForm}
          placeholder="Image"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
        >
          Create
        </button>
      </form>
    </>
  );
}

export default AddDog;
