import React from 'react';
import { Photo } from '../utils/interfaces';

interface CardProps {
  photo: Photo;
}

const Card = ({ photo }: CardProps) => {

  const { url, title, date, explanation } = photo;


  return (
    <div>
      <img
        src={url}
        alt={title}
        className='photo-image'
      />
      <div className='inner-container'>
        <h1>{title}</h1>
        <p className="date">{date}</p>
        <p className="explenation">{explanation}</p>
      </div>

    </div>
  )
}

export default Card
