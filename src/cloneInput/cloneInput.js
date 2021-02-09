import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function CloneInput() {
    const classes = useStyles();
    const [inputText,setInputText] = useState();
    const [pText,setPtext] = useState(inputText);

    useEffect(()=>{
        setPtext(inputText);
    },[inputText]);

    function handleChange(value){
        setInputText(value);
    }

    return (
        <div className={classes.cloneInput}>
            <form className={classes.root}>
                <TextField  label = "Введите текст" onChange={(e) => handleChange(e.target.value)}/>
                <p>{pText}</p>
            </form>
        </div>
    );
}

const useStyles = makeStyles((theme) =>({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },    
    cloneInput:{
        textAlign:"center",
    },
    input:{
        borderRadius:"20%",
    },
    output:{
        minHeight:20,
        marginTop:10,
        border:"1px solid black",
        width:"auto",
    },
}));