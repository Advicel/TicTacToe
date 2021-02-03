import React, { useEffect, useState } from 'react'

let timer;

export default function Clock() {

    const [date,setDate] = useState(new Date());

    useEffect(() =>{
        timer = setInterval(
            () => setDate(new Date()),
            1000
          );
        return () => clearInterval(timer);
    })
  
    return (
        <div>
            <h1>Привет, мир!</h1>
            <h2>Сейчас {date.toLocaleTimeString()}.</h2>
        </div>
    );
}