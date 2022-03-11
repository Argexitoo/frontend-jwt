import { Link } from 'react-router-dom';

function Dogs() {
  return (
    <>
      <div className="flex flex-col space-y-4 pt-4">
        <Link
          to="/dogs/views"
          className="text-white bg-sky-300  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          My Dogs
        </Link>
        <Link
          to="/dogs/add"
          className="text-white bg-sky-300  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add Dog
        </Link>
      </div>
    </>
  );
}

export default Dogs;
