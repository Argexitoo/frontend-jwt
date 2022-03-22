import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  return (
    <nav>
      <div className="nav-bar">
        {isLoggedIn && (
          <>
            <ul className="space-x-20 ml-6">
              <li>
                <a>
                  <img src="../dog-icon.png" alt="" width="50px" />
                </a>
                <ul className="rounded-lg border border-grey-600">
                  <li>
                    <Link to="/dogs/views">My Dogs</Link>
                  </li>
                  <li>
                    <Link to="/dogs/add">New Dog</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  <img src="../meeting-icon.png" alt="" width="50px" />
                </a>
                <ul className="rounded-lg border border-grey-600">
                  <li>
                    <Link to="/meetings/views">Meetings</Link>
                  </li>
                  <li>
                    <Link to="/meetings/myMeetings">My Meetings</Link>
                  </li>
                  <li>
                    <Link to="/meetings/add">New Meeting</Link>
                  </li>
                </ul>
              </li>
              <li>
                <img src="../user-icon.png" alt="" width="52px" className="pb-2" />
                <ul className="rounded-lg border border-grey-600">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/profile/users">Users</Link>
                  </li>
                  <li>
                    <a onClick={logOutUser}>Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        )}
      </div>
      {!isLoggedIn && (
        <>
          <div className="flex space-x-4 justify-end pb-5 nav-bar">
            <div className="pt-2 pr-2">
              <Link to="/signup">
                {' '}
                <button>Sign Up</button>{' '}
              </Link>
              <Link to="/login">
                {' '}
                <button>Login</button>{' '}
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
