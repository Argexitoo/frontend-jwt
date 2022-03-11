import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import apiService from '../../services/api.service';

function MeetingsList() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    apiService
      .getMeetingsViews()
      .then(response => {
        console.log(response.data);
        setMeetings(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {meetings.map(meeting => {
        return (
          <>
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                to={`/meetings/${meeting._id}/info`}
                className="text-white bg-sky-300  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {meeting.name}
                <button>-Info</button>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
}

export default MeetingsList;
