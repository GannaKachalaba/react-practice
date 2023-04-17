// http://localhost:3000/dogs/dog-2/subbreeds
const { useParams } = require('react-router-dom');

export const SubBreeds = () => {
  const { dogId } = useParams();

  //   useEffect(() => {
  //     // HTTP запит якщо потрібно
  //   }, []);

  //   "/dogs/:dogId"

  return <div>SubBreeds: {dogId}</div>;
};
