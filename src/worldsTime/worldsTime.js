import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/styles';


export default function WorldsTime(){
    const classes = useStyles();
    const [time, setTime] = useState(null);

    useEffect(()=>{
        handleClick("moscow");
    },[]);


    function handleClick(city){
        getTime(city).then(result => setTime(result));
    }

    return (
        <div className={classes.worldsTime}>
            <button className ={classes.button} onClick ={()=>handleClick("samara")}>время в Самаре</button>
            <button className ={classes.button}  onClick ={()=>handleClick("moscow")}>время в Москве</button>
            <div>
                {time===null ? "здесь будет время" : time}
            </div>
        </div>
    );
}

function getTime(city){
    return(
        fetch(`http://worldtimeapi.org/api/timezone/Europe/${city}`)
            .then(res=>res.json())
            .then(result =>{
                let date = result.datetime;
                const index = date.indexOf("T");
                date = date.slice(index+1);
                return date;
            })
    );
}

const useStyles = makeStyles({
    worldsTime:{
        textAlign:"center",
    },
    button:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        '& button':{
            marginLeft:10,
        },
    },
});