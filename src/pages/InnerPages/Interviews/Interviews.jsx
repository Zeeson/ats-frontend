import React, { useState } from 'react';
import "./index.scss"
import UpcomingInterview from './IncomingInterview'


const Interviews = () => {
    const [upcoming, setUpcoming] = useState("upcoming")
    
    
    return ( 
        <div className=''>
            <UpcomingInterview/>
        </div> 
    );
}
 
export default Interviews;