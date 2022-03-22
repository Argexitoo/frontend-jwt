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
      {dogs.map(dog => {
        return (
          <div key={dog._id}>
            <div className="card-dog">
              <div className="img-dog">
                {dog.image === '' ? (
                  <img src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg" />
                ) : (
                  <img src={dog.image} alt="" height="auto" />
                )}
              </div>
              <div className="container-dog ml-2">
                <strong>Name: {dog.name}</strong>
                <strong>Sex: {dog.sex}</strong>
                <strong>Race: {dog.race}</strong>
                <strong>Age: {dog.age}</strong>
                <strong>Size: {dog.size}</strong>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default DogsUsers;
