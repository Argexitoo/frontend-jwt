import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../services/api.service';

function MeetingDetail() {
  const { id } = useParams();
  const [meetingDetail, setMeetingDetail] = useState({});

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
  }, [id]);

  return (
    <>
      <img
        src="https://media.istockphoto.com/photos/stock-image-of-dogs-in-the-park-picture-id486644823?k=20&m=486644823&s=612x612&w=0&h=7_2F3OSh6Aj7YCRSyS4qn9Crl1qrJCoukl7Q2oEP1I4="
        alt=""
      />
      <div className="card-detail pt-5 pl-2">
        <strong className="text-2xl flex justify-center">{meetingDetail.name}</strong>
        <div>
          <div className="flex flex-col place-items-end pr-4 ">
            <strong>Users Joined</strong>
            <div className="pr-7">
              {meetingDetail.usersJoined !== undefined && meetingDetail.usersJoined.length > 0 ? (
                meetingDetail.usersJoined.map(elem => <p key={elem._id}>{elem.name}</p>)
              ) : (
                <p>No users joined yet</p>
              )}
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <strong>Location:</strong>
            <p>{meetingDetail.location}</p>
            <strong>Date</strong>
            <p>{meetingDetail.date}</p>
            <strong>Hour</strong>
            <p>{meetingDetail.hour}</p>
            <strong>Description</strong>
            <p>{meetingDetail.description}</p>
          </div>
          <button
            className="border mt-5 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Join Meeting
          </button>
        </div>
      </div>
    </>
  );
}

export default MeetingDetail;
