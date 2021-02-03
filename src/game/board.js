import React from "react"
import Square from "./square.js"
import PropTypes from 'prop-types';

export default function Board ({squares,onClick}) {
    return (
        <div>
            {squares.map((square,index) => 
                <Square 
                    value = {squares[index]}
                    onClick = {() => onClick(index)}
                    key = {index}
                    id = {index}
                />)}
        </div>
    );
}  

Board.propTypes = {
    squares: PropTypes.array,
    onClick: PropTypes.func,
}

Board.defaultProps ={
    
}