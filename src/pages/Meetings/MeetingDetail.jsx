import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../services/api.service';

function MeetingDetail() {
  const { id } = useParams();
  const [meetingDetail, setMeetingDetail] = useState([]);

  useEffect(() => {
    apiService
      .getMeeting(id)
      .then(response => {
        console.log(response.data);
        setMeetingDetail(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <strong>{meetingDetail.name}</strong>
      <h2>Location:</h2>
      <p>{meetingDetail.location}</p>
      <strong>Date</strong>
      <p>{meetingDetail.date}</p>
      <strong>Hour</strong>
      <p>{meetingDetail.hour}</p>
      <strong>Description</strong>
      <p>{meetingDetail.description}</p>
      <strong>Users Joined</strong>
      <p>{}</p>
      <button className="border" type="submit">
        Join Meeting
      </button>
    </>
  );
}

export default MeetingDetail;
