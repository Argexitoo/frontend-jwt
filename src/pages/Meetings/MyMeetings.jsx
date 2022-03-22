import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import apiService from '../../services/api.service';

function MyMeetings() {
  const [myMeetings, setMyMeetings] = useState([]);
  const [joinedMeetings, setJoinedMeetings] = useState([]);

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
        setJoinedMeetings(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="text-center pt-2 pb-2">Meetings Created</h1>
      {myMeetings.map(meet => {
        return (
          <div key={meet._id}>
            <div className="card-meeting">
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
                  <button className="bg-button mt-2 w-30 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    More Details
                  </button>
                </Link>
              </div>
              <div className="grid place-items-end mr-4 mt-2 ">
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
          </div>
        );
      })}
      <h1 className="text-center pt-2 pb-2">Meetings Join</h1>
      {joinedMeetings.map(joined => {
        return (
          <div key={joined._id}>
            <div className="card-meeting">
              <div className="flex flex-col space-y-4 pl-4 pt-2">
                <strong>{joined.name}</strong>
                <p>
                  <strong>Location: </strong>
                  {joined.location}
                </p>
                <p>
                  <strong>Date: </strong> {joined.date.slice(0, 10)}
                </p>
                <p>
                  <strong>Hour: </strong>
                  {joined.hour}
                </p>
                <Link to={`/meetings/${joined._id}/info`}>
                  <button className="bg-button mt-2 w-30 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MyMeetings;
