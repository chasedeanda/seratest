import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [breeds, setBreeds] = useState([]);

  const formatBreedList = (data) => {
    return Object.keys(data).reduce((_breeds, breed) => {
      const subBreeds = data[breed];
      if (subBreeds.length) {
        // Breed has subbreeds
        // iterate over each subbreed and
        // push as new item in list
        subBreeds.forEach((subBreed) => {
          _breeds.push(`${subBreed} ${breed}`);
        });
      } else {
        // No subbreeds, push breed name to list
        _breeds.push(breed);
      }
      return _breeds;
    }, []);
  };

  useEffect(() => {
    const getData = async () => {
      let result = await axios.get("https://dog.ceo/api/breeds/list/all");
      setBreeds(formatBreedList(result.data.message));
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>SERA TEST</h1>
      {breeds.map((breed) => (
        <div key={breed}>{breed}</div>
      ))}
    </div>
  );
}

export default App;
