import React, { useState } from 'react'
import star from '../images/star.png'


const Rating = () => {
  const [rating, setRating] = useState(0)
  const increment = () => {
    if (rating < 5) {
      setRating(rating + 1)
    }
  }
  const decrement = () => {
    if (rating > 0) {
      setRating(rating - 1)
    }
  }

  return (
    <div className='container'>
      <div className="mt-5 mb-3">
        <button onClick={increment}>+</button>
        <span style={{ padding: 10, margin: 10, fontWeight: 'bold' }}>{rating}</span>
        <button onClick={decrement}>-</button>
        <div className="container">{[...Array(rating)].map(() => {
          return (
            <img src={star} alt="star" />
          );
        })}
        </div>
      </div>
    </div>
  )
}


export default Rating

