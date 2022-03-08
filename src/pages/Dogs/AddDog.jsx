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
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" value={form.name} onChange={handleForm} placeholder="Name" />
        <label>Sex</label>
        <input name="sex" type="text" value={form.sex} onChange={handleForm} placeholder="Sex" />
        <label>Size</label>
        <input name="size" type="text" value={form.size} onChange={handleForm} placeholder="Size" />
        <label>Race</label>
        <input name="race" type="text" value={form.race} onChange={handleForm} placeholder="Race" />
        <label>Age</label>
        <input name="age" type="text" value={form.age} onChange={handleForm} placeholder="Age" />
        <label>Image</label>
        <input name="image" type="text" value={form.image} onChange={handleForm} placeholder="Image" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddDog;
