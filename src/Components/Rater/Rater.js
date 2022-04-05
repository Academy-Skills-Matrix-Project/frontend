import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rater = ({ count, rating, color, onRating}) => {

    const [hoverRating, setHoverRating] = useState(0);

    const getColor = index => {
        if(hoverRating >= index){
            return color.filled;
        } else if (!hoverRating && rating >= index){
            return color.filled;
        } else {
            return color.unfilled;
        }
    }
    const stars = useMemo(() => {
        return Array(count).fill(0).map((_, i ) => i + 1).map((id) => (
            <FontAwesomeIcon 
                key={id}
                className='cursor-pointer' 
                icon='star'
                onClick={() => onRating(id)}
                style={{color: getColor(id)}}
                onMouseEnter={() => setHoverRating(id)}
                onMouseLeave={() => setHoverRating(0)}/>
            ));
    }, [count, rating]);

    return (
        <Container>
            {stars}
        </Container>
    );
}

// Rater.PropTypes = {
//     count: PropTypes.number,
//     rating: PropTypes.number,
//     onChange: PropTypes.func,
//     color: {
//         filled: PropTypes.string,
//         unfilled: PropTypes.string,
//     },
// };

Rater.defaultProps = {
    count: 5,
    rating: 0,
    color: {
        filled: '#430ce8',
        unfilled: '#454054'
    },
};

export default Rater;