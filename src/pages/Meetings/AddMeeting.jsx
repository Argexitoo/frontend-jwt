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
        navigate('/meetings/myMeetings');
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <div className="grid place-items-center mt-8">
        <img src="../dog-event.png" alt="" width="130" />
        <h1 className="mt-4 mb-4">Add a new meeting!</h1>
      </div>
      <form onSubmit={handleSubmit} className="grid place-items-center">
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleForm}
          placeholder="Name"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          maxLength="40"
        />

        <input
          name="location"
          type="text"
          value={form.location}
          onChange={handleForm}
          placeholder="Location"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleForm}
          placeholder="Date"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />

        <input
          name="hour"
          type="text"
          value={form.hour}
          onChange={handleForm}
          placeholder="Hour"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />

        <input
          name="description"
          type="text"
          value={form.description}
          onChange={handleForm}
          placeholder="Description"
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <button type="submit" className="bg-button mt-2 w-35 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Create
        </button>
      </form>
    </>
  );
}

export default AddMeeting;
