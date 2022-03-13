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
      <div className="card-dog">
        {dogs.map(dog => {
          return (
            <>
              <img src={dog.image} alt="" width="350px" height="auto" />
              <div className="container-dog">
                <strong>Name:</strong>
                <p>{dog.name}</p>
                <strong>Sex:</strong>
                <p>{dog.sex}</p>
                <strong>Race:</strong>
                <p>{dog.race}</p>
                <strong>Age:</strong>
                <p>{dog.age}</p>
                <strong>Size:</strong>
                <p>{dog.size}</p>
              </div>
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
