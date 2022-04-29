import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Rater(props) {
    const [rating, setRating] = useState(0); // initial rating value
    const [toolTipShown] = useState(props.toolTipShown);
    const [isEditable] = useState(props.editable);
    const [isHover] = useState(props.hoverable);
    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
    }

    const rand = Math.floor(Math.random() * 5 + 1);
  
    return (
      <div className='rater' data-testid='star-rater'>
        <Rating 
        transition
        onClick={handleRating} 
        ratingValue={rating}
        fillColor='#FFD700'
        showTooltip={toolTipShown}
        tooltipDefaultText = 'Rate Your Proficiency'
        tooltipArray={['Novice', 'Beginner', 'Competent', 'Proficient', 'Expert']}
        initialValue={rand}
        readonly={isEditable}
        allowHover={isHover}
        />
      </div>
    )
  }