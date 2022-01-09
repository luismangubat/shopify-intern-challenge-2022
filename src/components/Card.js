import React from 'react';


// props: photos, like, onLine
// url, title, data, explanation

const Card = () => {
  return (
    <div>
        <div className='inner-container'>
        <h1>{photoData.title}</h1>
        <p className="date">{photoData.date}</p>
        <p className="explenation">{photoData.explanation}</p>
      </div>
      
    </div>
  )
}

export default Card
