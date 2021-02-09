import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';


export default function Square({square, onClick}) {
    const classes = useStyles();
    return (
        <button className={square.isWin ? classes.redSquare : classes.square} onClick = {onClick}>
            {square.value}
        </button>
    );
}

Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
};

Square.defaultProps ={
    value: null,
};

const useStyles = makeStyles({
    square:{
        background: "#fff",
        border: "1px solid #999",
        borderRadius:"20%",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        "&:hover":{
            cursor:"pointer",
            background:"#ab9e9e",
            border: "1px solid blue",
        },
        "$:active":{
            outline:"none",
        },
        "$:focus":{
            outline:"none",
        },
    },
    redSquare:{
        background: "red",
        border: "1px solid #999",
        borderRadius:"20%",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        outline:"none",
        "&:hover":{
            cursor:"pointer",
            background:"#ab9e9e",
            border: "1px solid blue",
        },
        "&:active":{
            outline:"none",
        },
        "&:focus":{
            outline:"none",
        }, 
        
    },
    
},{
    name:"square",
});