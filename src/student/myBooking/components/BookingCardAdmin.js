import React from 'react';
import {generateStartTime, generateEndTime} from '../../../utils/function';
import '../styles/bookingCard.scss';

function BookingCard(props) {
    const {
        start,
        end,
        title
        
    } = props;

const startTime = generateStartTime(props.start);
const endTime = generateEndTime(props.end);

    
    return (
        <a >
            <div className={`booking-card `}>
                <p className='booking-card__text'>
                    <strong>{`${startTime}--${endTime}`}</strong> 
                </p>
                <p className='booking-card__text'>{title}</p>
                
            </div>
        </a>
    );
}

export default BookingCard;