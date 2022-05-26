import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
function App() {
  let arr = [];
  const [breeds, setBreeds] = useState({});

  useEffect(() => {
    const getData = async () => {
      let result = await axios.get("https://dog.ceo/api/breeds/list/all");
      setBreeds(result.data.message);
    };
    getData();
  }, []);
  useEffect(() => {
    let temp = breeds;
    console.log("temp breeds: ", breeds);
    Object.keys(breeds).map((key, index) => {
      console.log("breeds[key]: ", breeds[key]);

      arr.push(breeds[key]);
    });
    console.log(arr);
  }, [breeds]);

  return (
    <div className="App">
      <h1>SERA TEST</h1>
      {Object.keys(breeds).map((key, index) => {
        return (
          <div key={index}>
            {key}: {`${breeds[key]}`}
          </div>
        );
      })}
    </div>
  );
}

export default App;
