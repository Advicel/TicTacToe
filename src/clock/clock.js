import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

let timer;

export default function Clock() {
    const classes =  useStyles();
    const [date,setDate] = useState(new Date());

    useEffect(() =>{
        timer = setInterval(
            () => setDate(new Date()),
            1000
          );
        return () => clearInterval(timer);
    });
  
    return (
        <div className = {classes.clock}>
            <h1>Привет, мир!</h1>
            <h2>Сейчас {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

const useStyles = makeStyles({
    clock:{
        textAlign:"center",
    },
});