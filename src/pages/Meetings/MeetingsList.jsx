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
      <h1>All meetings</h1>
      {meetings.map(meeting => {
        return (
          <>
            <Link to={`/meetings/${meeting._id}/info`}>
              {meeting.name}
              <button>-Info</button>
            </Link>
            <br />
          </>
        );
      })}
    </>
  );
}

export default MeetingsList;
