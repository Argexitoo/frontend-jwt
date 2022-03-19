import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import apiService from '../../services/api.service';

function MyMeetings() {
  const [myMeetings, setMyMeetings] = useState([]);
  const [meetingsJoined, setMeetingsJoined] = useState([]);

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

  useEffect(() => {
    apiService
      .joinedMeeting()
      .then(response => {
        console.log(response.data);
        setMeetingsJoined(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="text-center pt-2 pb-2">My Meetings</h1>
      {myMeetings.map(meet => {
        return (
          <>
            <div className="card-my-meeting">
              <div className="flex flex-col space-y-4 pl-4 pt-2">
                <strong>{meet.name}</strong>
                <p>
                  <strong>Location: </strong>
                  {meet.location}
                </p>
                <p>
                  <strong>Date: </strong> {meet.date.slice(0, 10)}
                </p>
                <p>
                  <strong>Hour: </strong>
                  {meet.hour}
                </p>
                <Link to={`/meetings/${meet._id}/info`}>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    More Details
                  </button>
                </Link>
              </div>
              <div className="grid place-items-end mr-4 mt-4 ">
                <Link to={`/meetings/${meet._id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </>
        );
      })}

      <h1>Meetings Joined</h1>
      {meetingsJoined.map(meetJoined => {
        return (
          <>
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                to={`/meetings/${meetJoined._id}/info`}
                className="text-white bg-sky-300  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {meetJoined.name}
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
}

export default MyMeetings;
