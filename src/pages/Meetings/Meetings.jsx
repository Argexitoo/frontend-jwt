import { Link } from 'react-router-dom';

function Meetings() {
  return (
    <>
      <div className="flex flex-col space-y-4 pt-4">
        <Link
          to="/meetings/views"
          className="text-white bg-sky-300  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          All Meetings
        </Link>
        <Link
          to="/meetings/myMeetings"
          className="text-white bg-sky-300  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          My Meetings
        </Link>
        <Link
          to="/meetings/add"
          className="text-white bg-sky-300  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add Meeting
        </Link>
      </div>
    </>
  );
}

export default Meetings;
