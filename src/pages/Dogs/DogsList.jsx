import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import apiService from '../../services/api.service';

function DogsList() {
  const [dogs, setDogs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiService
      .getMyDogs()
      .then(response => {
        console.log(response.data);
        setDogs(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = async () => {
    try {
      await apiService.deleteDog(id);
      Navigate('/dogs/views');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>My Dogs</h1>
      {dogs.map(dog => {
        return (
          <>
            {dog.name}
            <Link to="/dogs/:id">
              <button>Edit/</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
            <br />
          </>
        );
      })}
    </>
  );
}

export default DogsList;
