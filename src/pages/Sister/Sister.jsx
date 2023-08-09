import React, { useContext } from 'react';
import { HouseContext, RingContext } from '../GrandFather/GrandFather';

const Sister = () => {
    const {house} = useContext(HouseContext)
    const ring = useContext(RingContext)
    return (
        <div className='common'>
            <h4>Sister{house}</h4>
            <h5>Ornaments: {ring}</h5>
        </div>
    );
};

export default Sister;