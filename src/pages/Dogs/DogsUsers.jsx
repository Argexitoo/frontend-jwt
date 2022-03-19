import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../services/api.service';

function DogsUsers() {
  const [dogs, setDogs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiService
      .getDogsProfile(id)
      .then(response => {
        console.log(response.data);
        setDogs(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <div className="card-dog">
        {dogs.map(dog => {
          return (
            <>
              {dog.image === '' ? (
                <img
                  key={dog.image}
                  src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg"
                  width="350px"
                />
              ) : (
                <img src={dog.image} alt="" width="350px" height="auto" />
              )}
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
            </>
          );
        })}
      </div>
    </>
  );
}

export default DogsUsers;
