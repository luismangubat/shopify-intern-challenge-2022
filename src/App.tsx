import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Card from './components/Card';
import Navbar from './components/Navbar';

const API_KEY = "https://api.nasa.gov/planetary/apod?api_key=g9M8wUGMcefg71f0dj1NmB4LblvvgSwFPv6BVZPa";

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  padding: 2rem 1rem;
  flex-direction: column;
  max-width: 1080px;

  @media (min-width: 769px) {
    width: 70%;
    margin: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;


function App() {

  const [photoData, setPhotoData] = useState(null);  
  //const [searchVal, setSearchVal] = useState("");

  useEffect(() => {

    fetchPhotoData();

    async function fetchPhotoData() {
      const res = await fetch(API_KEY);
      const data = await res.json();

      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div className="container">
      <Navbar />
      <BrowserRouter>
        <ContentContainer>
          <HeaderContainer>
            <h1>Spacetagram</h1>
          </HeaderContainer>
          <Card photo={photoData} />
        </ContentContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
