import './App.css';
import { useState } from 'react';


const API_KEY = "https://api.nasa.gov/planetary/apod?api_key=g9M8wUGMcefg71f0dj1NmB4LblvvgSwFPv6BVZPa";


function App() {

  const [photoData, setPhotodata] = useState("");
  const [searchVal, setSearchVal] = useState("");

  const getPhotoData = async (searchVal) => {
    try {
      const url = "https://api.nasa.gov/planetary/apod?api_key=g9M8wUGMcefg71f0dj1NmB4LblvvgSwFPv6BVZPa";
      const response =  await fetch(url);
      const responseJson = await response.json();
      console.log(response)
      
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      } 
        return []
    } catch (err) {
      console.log(err)
    }
  };



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
