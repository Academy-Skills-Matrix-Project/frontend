import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Rater() {
    const [rating, setRating] = useState(0); // initial rating value
  
    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
    }
  
    return (
      <div className='rater' data-testid='star-rater'>
        <Rating 
        transition
        onClick={handleRating} 
        ratingValue={rating}
        fillColor='#FFD700'
        showTooltip
        tooltipDefaultText = 'Rate Your Proficiency'
        tooltipArray={['Novice', 'Beginner', 'Competent', 'Proficient', 'Expert']}
        />
      </div>
    )
  }