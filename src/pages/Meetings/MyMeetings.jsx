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
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                to={`/meetings/${meet._id}`}
                className="text-white bg-sky-300  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {meet.name} <button>-Edit</button>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
}

export default MyMeetings;
