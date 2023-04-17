// http://localhost:3000/dogs/dog-3/gallery

const { useParams } = require('react-router-dom');

export const Gallery = () => {
  const { dogId } = useParams();

  //   useEffect(() => {
  //     // HTTP запит якщо потрібно
  //   }, []);

  //   "/dogs/:dogId"

  return <div>Image Gallery: {dogId}</div>;
};
