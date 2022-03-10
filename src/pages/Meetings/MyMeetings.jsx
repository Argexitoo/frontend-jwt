import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import apiService from '../../services/api.service';

function MyMeetings() {
  const [myMeetings, setMyMeetings] = useState([]);

  useEffect(() => {
    apiService
      .getMyMeetings()
      .then(response => {
        console.log(response.data);
        setMyMeetings(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>My Meetings</h1>
      {myMeetings.map(meet => {
        return (
          <>
            <Link to={`/meetings/${meet._id}`}>
              {meet.name} <button>-Edit</button>
            </Link>
            <br />
          </>
        );
      })}
    </>
  );
}

export default MyMeetings;
