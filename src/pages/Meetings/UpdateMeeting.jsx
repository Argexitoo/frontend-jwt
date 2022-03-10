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
      navigate('/meetings/views');
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
        navigate('/meetings/views');
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" value={meeting.name} onChange={handleOnChange} />
        <label>Location</label>
        <input name="location" type="text" value={meeting.location} onChange={handleOnChange} />
        <label>Date</label>
        <input name="size" type="text" value={meeting.date} onChange={handleOnChange} />
        <label>Hour</label>
        <input name="hour" type="text" value={meeting.hour} onChange={handleOnChange} />
        <label>Description</label>
        <input name="description" type="text" value={meeting.description} onChange={handleOnChange} />
        <button type="submit">Update</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default UpdateMeeting;
