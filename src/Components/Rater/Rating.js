import React, {useState} from 'react';
import Rater from '../Rater/Rater';

const Rating = () => {
    const [rating, setRating] = useState(0);
    return (
      <>
    
        <div className="row">
          <div className="col text-center">
            <h2>Rate me</h2>
            <p>Rating component</p>
            <Rater rating={rating} onRating={(rate) => setRating(rate)} />
            <p>Rating - {rating}</p>
            
          </div>
        </div>
      </>
    );
  };

  export default Rating;
