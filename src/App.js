import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {


  const [usename, setUsername] = useState("haj Ashkan")
  const [persons, setPersons] = useState([])
  const [ShowPers, setShowPers] = useState(false)

  const apiHandler = () => {
    // Make a request for a user with a given ID
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        // handle success
        console.log(res.data[1]);
        setPersons((pervState) => (pervState = res.data ));
        console.log(persons);
      })
      .catch(err => {
        // handle error
        console.log(err);
      });
  }


  const userupdateHandler = () => {
    setUsername("Haj Kiddo")
  }


  return (
    <div className="App">
      <header className="App-header">

        <p>{usename}</p>
        <br></br>
        <button onClick={apiHandler}>Show Users</button>
        <br></br>
        <button onClick={userupdateHandler}>Change Name</button>
        {
          ShowPers &&
          <p>
            {

            }
          </p>
        }
      </header>
    </div>
  );
}

export default App;
