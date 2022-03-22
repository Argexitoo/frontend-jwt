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
        className="w-full text-black"
      />
      {meetings.map(meeting => {
        return (
          <div key={meeting._id}>
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

export default MeetingsList;
