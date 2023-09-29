import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [usename, setUsername] = useState("haj Ashkan");
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setPersons(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);


  const userupdateHandler = () => {
    setUsername("Haj Kiddo");
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{usename}</p>
        <br></br>
        <button onClick={userupdateHandler}>Change Name</button>
        {
          persons.length ? 
          persons.map(item => <h2 key={item.id}>{item.name}</h2>)
          :
          <h2>loading ...</h2>
        }
      </header>
    </div>
  );
}

export default App;
