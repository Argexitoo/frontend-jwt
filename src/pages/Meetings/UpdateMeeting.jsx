import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../../services/api.service';

function UpdateMeeting() {
  const { id } = useParams();
  const [meeting, setMeeting] = useState({
    name: '',
    location: '',
    date: '',
    hour: '',
    description: '',
  });

  const navigate = useNavigate();

  const meetingId = async () => {
    const response = await apiService.getMeeting(id);
    console.log(response.data);
    setMeeting(response.data);
  };

  useEffect(() => {
    meetingId();
  }, [id]);

  const handleDelete = async () => {
    try {
      await apiService.deleteMeeting(id);
      navigate('/meetings/myMeetings');
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = e => {
    setMeeting(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    apiService
      .updateMeeting(id, {
        name: meeting.name,
        location: meeting.location,
        date: meeting.date,
        hour: meeting.hour,
        description: meeting.description,
      })
      .then(response => {
        console.log(response);
        navigate('/meetings/myMeetings');
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <div className="grid place-items-center mt-8">
        <img src="../dog-event.png" alt="" width="130" />
        <h1 className="mt-4 mb-4">Update your meeting!</h1>
      </div>
      <form onSubmit={handleSubmit} className="grid place-items-center">
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={meeting.name}
          onChange={handleOnChange}
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          maxLength="40"
        />
        <label>Location</label>
        <input
          name="location"
          type="text"
          value={meeting.location}
          onChange={handleOnChange}
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Date</label>
        <input
          name="size"
          type="text"
          value={meeting.date}
          onChange={handleOnChange}
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Hour</label>
        <input
          name="hour"
          type="text"
          value={meeting.hour}
          onChange={handleOnChange}
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <label>Description</label>
        <input
          name="description"
          type="text"
          value={meeting.description}
          onChange={handleOnChange}
          className="w-80 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        />
        <div className="flex space-x-4 mt-4">
          <button type="submit" className="bg-button mt-2 w-35 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-button mt-2 w-35 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdateMeeting;
