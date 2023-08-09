import React, { createContext, useState } from 'react';
import './GrandFather.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

//Context API
export  const HouseContext = createContext(5)
export const RingContext = createContext('diamond ring')

const GrandFather = () => {
    
    const [house, setHouse] = useState(5)
    const ornaments = 'diamon'
    return (
        <div className='common'>
            <h3>Grand Father</h3>
            <RingContext.Provider value={ornaments}>
            <HouseContext.Provider value={{house ,setHouse}}>
            <Father></Father>
            <Uncle></Uncle> 
            <Aunty></Aunty>
            </HouseContext.Provider>
            </RingContext.Provider>
        </div>
    );
};

export default GrandFather; 