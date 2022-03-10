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
        <input name="name" type="text" value={form.name} onChange={handleForm} placeholder="Name" />
        <label>Location</label>
        <input name="location" type="text" value={form.location} onChange={handleForm} placeholder="Location" />
        <label>Date</label>
        <input name="date" type="text" value={form.date} onChange={handleForm} placeholder="Date" />
        <label>Hour</label>
        <input name="hour" type="text" value={form.hour} onChange={handleForm} placeholder="Hour" />
        <label>Description</label>
        <input
          name="description"
          type="text"
          value={form.description}
          onChange={handleForm}
          placeholder="Description"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddMeeting;
