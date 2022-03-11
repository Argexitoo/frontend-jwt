import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav className="flex space-x-4 justify-end pb-5 bg-sky-400">
      {isLoggedIn && (
        <>
          <Link to="/dogs">
            <button>Dogs</button>
          </Link>
          <Link to="/meetings">
            <button>Meetings</button>
          </Link>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {' '}
            <button>Sign Up</button>{' '}
          </Link>
          <Link to="/login">
            {' '}
            <button>Login</button>{' '}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
