import React from 'react';

const StarRating = ({ rating, size = '20px'}) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<span key={i} style={{ color: 'gold', fontSize : size}}>&#9733;</span>); // Filled star
    } else {
      stars.push(<span key={i} style={{ color: 'lightgray' , fontSize : size}}>&#9734;</span>); // Empty star
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
