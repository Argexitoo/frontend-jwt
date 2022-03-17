import { Route, Routes } from 'react-router-dom';

import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Navbar from './components/Navbar';
import { AuthProviderWrapper } from './context/auth.context';
import Dogs from './pages/Dogs/Dogs';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Meetings from './pages/Meetings/Meetings';
import SignupPage from './pages/SignupPage';
import Profile from './pages/Profile/Profile';
import DogsList from './pages/Dogs/DogsList';
import AddDog from './pages/Dogs/AddDog';
import UpdateDog from './pages/Dogs/UpdateDog';
import AddMeeting from './pages/Meetings/AddMeeting';
import MeetingsList from './pages/Meetings/MeetingsList';
import UpdateMeeting from './pages/Meetings/UpdateMeeting';
import MeetingDetail from './pages/Meetings/MeetingDetail';
import MyMeetings from './pages/Meetings/MyMeetings';
import UpdateProfile from './pages/Profile/UpdateProfile';
import Users from './pages/Profile/Users';

function App() {
  return (
    <AuthProviderWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <IsPrivate>
              <UpdateProfile />
            </IsPrivate>
          }
        />
        <Route
          path="/profile/users"
          element={
            <IsPrivate>
              <Users />
            </IsPrivate>
          }
        />

        <Route
          path="/dogs"
          element={
            <IsPrivate>
              <Dogs />
            </IsPrivate>
          }
        />
        <Route
          path="/dogs/views"
          element={
            <IsPrivate>
              <DogsList />
            </IsPrivate>
          }
        />
        <Route
          path="/dogs/add"
          element={
            <IsPrivate>
              <AddDog />
            </IsPrivate>
          }
        />
        <Route
          path="dogs/:id"
          element={
            <IsPrivate>
              <UpdateDog />
            </IsPrivate>
          }
        />
        <Route
          path="/meetings"
          element={
            <IsPrivate>
              <Meetings />
            </IsPrivate>
          }
        />
        <Route
          path="/meetings/add"
          element={
            <IsPrivate>
              <AddMeeting />
            </IsPrivate>
          }
        />
        <Route
          path="/meetings/views"
          element={
            <IsPrivate>
              <MeetingsList />
            </IsPrivate>
          }
        />

        <Route
          path="/meetings/myMeetings"
          element={
            <IsPrivate>
              <MyMeetings />
            </IsPrivate>
          }
        />
        <Route
          path="/meetings/:id"
          element={
            <IsPrivate>
              <UpdateMeeting />
            </IsPrivate>
          }
        />
        <Route
          path="/meetings/:id/info"
          element={
            <IsPrivate>
              <MeetingDetail />
            </IsPrivate>
          }
        />

        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </AuthProviderWrapper>
  );
}

export default App;
