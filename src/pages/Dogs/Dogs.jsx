import { Link } from 'react-router-dom';

function Dogs() {
  return (
    <>
      (
      <Link to="/dogs/views">
        <button>My Dogs</button>
      </Link>
      ), (
      <Link to="/dogs/add">
        <button>Add Dog</button>
      </Link>
      ),
    </>
  );
}

export default Dogs;
