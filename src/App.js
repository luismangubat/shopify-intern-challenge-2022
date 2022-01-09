import './App.css';
import { useState, useEffect } from 'react';


const API_KEY = "https://api.nasa.gov/planetary/apod?api_key=g9M8wUGMcefg71f0dj1NmB4LblvvgSwFPv6BVZPa";


function App() {

  const [photoData, setPhotoData] = useState(null);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {

    fetchPhotoData();

    async function fetchPhotoData() {
      const res = await fetch(API_KEY);
      const data = await res.json();

      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div/>;

  return (
    <div className="container">
      <img
        src={photoData.url}
        alt={photoData.title}
        className='photo'
        />

        <div className='inner-container'>
          <h1>{photoData.title}</h1>
          <p className ="date">{photoData.date}</p>
          <p className="explenation">{photoData.explanation}</p>
        </div>
    </div>
  );
}

export default App;
