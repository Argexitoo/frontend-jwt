import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../services/api.service';

function MeetingDetail() {
  const { id } = useParams();
  const [meetingDetail, setMeetingDetail] = useState({});
  // const [usersJoined, setUsersJoined] = useState([]);
  // const [usersJoin, setUsersJoin] = useState([]);

  // ENCONTRAR ID MEETING

  // useEffect(() => {
  //   apiService
  //     .getMeeting(id)
  //     .then(response => {
  //       console.log(response.data);
  //       setMeetingDetail(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [id]);

  // USUARIOS QUE SE HAN UNIDO AL MEETING.

  const getMeeting = async () => {
    try {
      const response = await apiService.joinedMeeting(id);
      console.log(response.data);
      setMeetingDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMeeting();
  }, []);

  // useEffect(() => {
  //   apiService
  //     .joinMeeting(id)
  //     .then(response => {
  //       console.log(response.data);
  //       setUsersJoin(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [id]);

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
      <p>2</p>
      {/* {meetingDetail.usersJoined.length > 0 ? (
        meetingDetail.usersJoined.map(elem => <p key={elem._id}>{elem.name}</p>)
      ) : (
        <p>No users joined yet</p>
      )} */}
      <button className="border" type="submit">
        Join Meeting
      </button>
    </>
  );
}

export default MeetingDetail;
