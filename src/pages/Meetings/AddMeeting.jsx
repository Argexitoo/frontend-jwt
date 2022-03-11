import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../../services/api.service';

function AddMeeting() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    hour: '',
    location: '',
    description: '',
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
      .addNewMeeting(form)
      .then(response => {
        console.log(response);
        navigate('/meetings/views');
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
          value={form.name}
          onChange={handleForm}
          placeholder="Name"
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Location</label>
        <input
          name="location"
          type="text"
          value={form.location}
          onChange={handleForm}
          placeholder="Location"
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Date</label>
        <input
          name="date"
          type="text"
          value={form.date}
          onChange={handleForm}
          placeholder="Date"
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Hour</label>
        <input
          name="hour"
          type="text"
          value={form.hour}
          onChange={handleForm}
          placeholder="Hour"
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Description</label>
        <input
          name="description"
          type="text"
          value={form.description}
          onChange={handleForm}
          placeholder="Description"
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default AddMeeting;
