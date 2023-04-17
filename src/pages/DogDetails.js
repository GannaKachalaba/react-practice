// /dogs/:dogId
// http://localhost:3000/dogs/dog-3
// http://localhost:3000/dogs/subbreed
// http://localhost:3000/dogs/gallery

import { Link, Outlet, useParams } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();

  //   useEffect(() => {
  //     // HTTP запит якщо потрібно
  //   }, []);

  //   "/dogs/:dogId"

  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreeds">Підпороди</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;
