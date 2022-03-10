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
      <div className="flex flex-col  rounded-lg border shadow-md md:flex-row md:max-w-xl">
        {dogs.map(dog => {
          return (
            <>
              <img
                src={dog.image}
                alt=""
                className="object-cover w-full h-50 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              />
              <strong>Name:</strong>
              <p>{dog.name}</p>
              <strong>Race:</strong>
              <p>{dog.race}</p>
              <strong>Age:</strong>
              <p>{dog.age}</p>
              <strong>Size:</strong>
              <p>{dog.size}</p>
              <br />
              <Link to={`/dogs/${dog._id}`}>
                <button>Edit</button>
              </Link>
              <br />
            </>
          );
        })}
      </div>
    </>
  );
}

export default DogsList;
