import { Route, Routes } from 'react-router-dom';

import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Navbar from './components/Navbar';
import { AuthProviderWrapper } from './context/auth.context';
import Dogs from './pages/Dogs/Dogs';
import Home from './pages/Profile';
import LoginPage from './pages/LoginPage';
import Meetings from './pages/Meetings';
import SignupPage from './pages/SignupPage';
import Profile from './pages/Profile';
import DogsList from './pages/Dogs/DogsList';
import AddDog from './pages/Dogs/AddDog';
import UpdateDog from './pages/Dogs/UpdateDog';

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
