import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import apiService from '../../services/api.service';

function Users() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    apiService
      .getAllUsers()
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSearch = e => {
    e.persist();
    setInput(e.target.location);
    handleOnFilter(e.target.value);
  };

  const handleOnFilter = input => {
    console.log('value', input);
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(input.toLowerCase()));
    setUsers(filteredUsers);
    if (input === '') {
      setUsers(users);
    }
  };

  return (
    <>
      <input
        type="search"
        name="name"
        placeholder="Search..."
        onChange={handleSearch}
        defaultValue={input}
        key={users.name}
        className="w-full text-black"
      />
      {users.map(user => {
        return (
          <div key={user.name}>
            <Link to={`/profile/${user._id}/info`}>
              <div className="users text-sm pl-2 ml-2 mt-2" key={user._id}>
                <div className="users-img mr-4 mt-2">
                  {user.image === undefined || user.image === '' ? (
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="border rounded-full" />
                  ) : (
                    <img src={user.image} alt="Avatar" className="border rounded-full" />
                  )}
                </div>
                <span>#{user.nickName}</span>
                <br />
                <span>
                  {user.name},{user.age}
                </span>
                <br />
                <span>{user.location}</span>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Users;
