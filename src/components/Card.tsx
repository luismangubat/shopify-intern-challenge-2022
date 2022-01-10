import React, { useState } from 'react';
import styled from 'styled-components';
import { Photo } from '../utils/interfaces';

interface CardProps {
  photo: Photo;
}
const CardContainer = styled.div`
max-width: 400px;

`;

const ImageContainer = styled.img`
  max-width: 300px
`;

const InnerContainer = styled.div`
  max-height: 100px
`;


const Card = ({ photo }: CardProps) => {

  const { url, title, date, explanation, media_type } = photo;
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  console.log("thumbail url", url)
  return (
    <CardContainer>
      <ImageContainer
        src={media_type === "video" ? thumbnail_url : url }
        alt={title}
        className='photo-image'
      />
      <InnerContainer>
        <h1>{title}</h1>
        <p className="date">{date}</p>
        <p className="explenation">{explanation}</p>
      </InnerContainer>
    </CardContainer>
  )
}

export default Card
