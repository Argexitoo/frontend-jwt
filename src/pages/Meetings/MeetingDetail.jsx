import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../services/api.service';
import { AuthContext } from '../../context/auth.context';

function MeetingDetail() {
  const { id } = useParams();
  const [meetingDetail, setMeetingDetail] = useState({
    date: Date.now().toString(),
  });
  const [isJoined, setJoined] = useState(false);
  const { isLoggedIn, user, isLoading } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  // USUARIOS QUE SE HAN UNIDO AL MEETING.

  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      setUserData(user);
      getMeeting();
    }
  }, [isLoading, userData]);

  const getMeeting = async () => {
    try {
      const response = await apiService.getMeeting(id);
      const amIJoined = response.data.usersJoined.filter(item => item._id == userData._id);
      if (amIJoined.length > 0) {
        setJoined(true);
      } else {
        setJoined(false);
      }
      setMeetingDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getJoin = async () => {
    try {
      await apiService.joinMeeting(id);
      getMeeting();
    } catch (error) {
      console.log(error);
    }
  };

  const unJoin = async () => {
    try {
      await apiService.unJoinMeeting(id);
      getMeeting();
    } catch (error) {
      console.log(error);
    }
  };

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
                <p className="mr-4">0</p>
              )}
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <strong className="text-xl">Location:</strong>
            <p>{meetingDetail.location}</p>
            <strong className="text-xl">Date:</strong>
            <p>{meetingDetail.date.toString().slice(0, 10)}</p>
            <strong className="text-xl">Hour:</strong>
            <p>{meetingDetail.hour}</p>
            <strong className="text-xl">Description:</strong>
            <p>{meetingDetail.description}</p>
          </div>
          {!isJoined ? (
            <button
              className="mt-2 w-30 bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              onClick={getJoin}
            >
              Join Meeting
            </button>
          ) : (
            <button
              className=" mt-2 w-30 bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              onClick={unJoin}
            >
              I will not be able to attend
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default MeetingDetail;
