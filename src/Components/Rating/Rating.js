import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Rater() {
    const [rating, setRating] = useState(0); // initial rating value
  
    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
      // other logic
    }
  
    return (
      <div className='rater'>
        <Rating 
        
        transition
        onClick={handleRating} 
        ratingValue={rating}
        fillColorArray={['#e80707', '#d66f15', '#f5f542', '#0647d4', '#06d425']}
        />
      </div>
    )
  }