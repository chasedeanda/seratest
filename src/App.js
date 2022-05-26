import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
//let result = {};
function App() {
  const [breeds, setBreeds] = useState({});
  const [b, setB] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let result = await axios.get("https://dog.ceo/api/breeds/list/all");
      setBreeds(result.data.message);
    };
    getData();
  }, []);

  return (
    <div className="App">
      {Object.keys(breeds).map((key, index) => {
        return (
          <div key={index}>
            {key}: {breeds[key]}
          </div>
        );
      })}
    </div>
  );
}

export default App;
