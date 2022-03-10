import { Link } from 'react-router-dom';

function Meetings() {
  return (
    <>
      <Link to="/meetings/views">All Meetings</Link>
      <Link to="/meetings/myMeetings">My Meetings</Link>
      <Link to="/meetings/add">Add Meeting</Link>
    </>
  );
}

export default Meetings;
