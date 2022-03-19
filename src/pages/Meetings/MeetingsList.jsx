import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../../services/api.service';

function MeetingsList() {
  const [meetings, setMeetings] = useState([]);
  const [input, setInput] = useState('');

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

  const handleSearch = e => {
    e.persist();
    setInput(e.target.location);
    handleOnFilter(e.target.value);
  };

  const handleOnFilter = input => {
    console.log('value', input);
    const filteredMeetings = meetings.filter(meeting => meeting.location.toLowerCase().includes(input.toLowerCase()));
    setMeetings(filteredMeetings);
    if (input === '') {
      setMeetings(meetings);
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
        key={meetings.location}
      />
      {meetings.map(meeting => {
        return (
          <>
            <div className="card-meeting">
              <div className="flex flex-col space-y-4 pl-4 pt-2">
                <strong>{meeting.name}</strong>
                <p>
                  <strong>Location: </strong>
                  {meeting.location}
                </p>
                <p>
                  <strong>Date: </strong> {meeting.date.slice(0, 10)}
                </p>
                <p>
                  <strong>Hour: </strong>
                  {meeting.hour}
                </p>
                <Link to={`/meetings/${meeting._id}/info`}>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default MeetingsList;
