import React, { useState } from 'react';
import './Calendar.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function Cal() {
    const [date, setDate] = useState(new Date());
    const onChange =()=>{
        setDate(date);
    }
    return (
       <div>
         <Calendar onChange={onChange} value={date} />

       </div> 
    )
}

export default Cal
