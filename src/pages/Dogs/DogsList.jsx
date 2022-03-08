import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../../services/api.service';

function DogsList() {
  const [dogs, setDogs] = useState([]);

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

  return (
    <>
      <h1>My Dogs</h1>
      {dogs.map(dog => {
        return (
          <>
            <Link to={`/dogs/${dog._id}`}>
              {dog.name} <button>-Edit</button>
            </Link>

            <br />
          </>
        );
      })}
    </>
  );
}

export default DogsList;
