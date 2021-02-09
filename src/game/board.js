import React from "react";
import Square from "./square.js";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';


export default function Board ({squares,onClick,classes}) {
    const styles = useStyles({classes});
    return (
        <div className={styles.gameBoard}>
            {squares.map((square,index) => 
                <Square 
                    square = {squares[index]}
                    onClick = {() => onClick(index)}
                    key = {index}
                />)}
        </div>
    );
}  

Board.propTypes = {
    squares: PropTypes.array,
    onClick: PropTypes.func,
};

Board.defaultProps ={
    
};

const useStyles = makeStyles({
    gameBoard:{
        display: "inline-grid",
        gridTemplateColumns:"40px 40px 40px",
        gridTemplateRows:"40px 40px 40px",
    },
});

