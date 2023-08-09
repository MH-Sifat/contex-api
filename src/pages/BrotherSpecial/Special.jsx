import React, { useContext } from 'react';
import { HouseContext } from '../GrandFather/GrandFather';

const Special = () => {
    const {house ,setHouse} = useContext(HouseContext);
    const houseIncrease = () => {
       
        setHouse(house +1)
    }
    return (
        <div className='common'>
            <h4>BrotherSpecial {house}</h4>
            <button onClick={houseIncrease}>House Increase</button>
        </div>
    );
};

export default Special;