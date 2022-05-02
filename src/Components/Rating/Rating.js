import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Rater(props) {
    const [rating, setRating] = useState(0); // initial rating value
    const [toolTipShown] = useState(props.toolTipShown);
    const [isEditable] = useState(props.editable);
    const [isHover] = useState(props.hoverable);
    const [level] = useState(props.level)
    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
    }
  
    return (
      <>
      {isEditable ? (
        <div className='rater' data-testid='star-rater'>
          <Rating 
          transition
          onClick={handleRating} 
          ratingValue={rating}
          fillColor='#FFD700'
          showTooltip={toolTipShown}
          tooltipDefaultText = 'Rate Your Proficiency'
          tooltipArray={['Novice', 'Beginner', 'Competent', 'Proficient', 'Expert']}
          initialValue={level}
          readonly={false}
          allowHover={isHover}
          />
        </div>
      ) : (
        <div className='rater' data-testid='star-rater'>
          <Rating 
          fillColor='#FFD700'
          showTooltip={toolTipShown}
          tooltipDefaultText = 'Rate Your Proficiency'
          tooltipArray={['Novice', 'Beginner', 'Competent', 'Proficient', 'Expert']}
          initialValue={level}
          readonly={true}
          allowHover={isHover}
          />
        </div>
      )}
      </>
    )
  }