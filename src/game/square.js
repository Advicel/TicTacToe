import React from "react"
import PropTypes from 'prop-types'


export default function Square({value, onClick,id}) {
    return (
        <button className="square" id={id} onClick = { onClick}>
            {value}
        </button>
    );
}

Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
}

Square.defaultProps ={
    value: null,
}