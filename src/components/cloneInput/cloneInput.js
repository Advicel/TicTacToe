import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';

function CloneInput({moves}) {
    const classes = useStyles();
    const [inputText,setInputText] = useState();
    const [pText,setPtext] = useState(inputText);
    console.log(moves, "from CLoneInput");
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
                <ul>
                    {moves.map(x=>{
                        return <li key = {x}>{x}</li>;
                    })}
                </ul>
            </form>
        </div>
    );
}

const mapStateToProps = state =>{
    return {
        moves:state.moves.moves,
    };
};

export default connect(mapStateToProps,null)(CloneInput);

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