import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {connect} from 'react-redux';
import {createMove} from '../../redux/actions';


function Square({createMove,square, onClick,index}) {
    const styles = useStyles();
    const clickHandler = () => {
        onClick();
        createMove(index);
    };
    return (
        <button className={square.isWin ? styles.red : styles.square} onClick = {clickHandler}>
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

const mapStateToProps = state =>{
    return {
        moves:state.moves.moves,
    };
};
const mapDispatchToProps = {
    createMove:createMove,
};
export default connect(mapStateToProps,mapDispatchToProps)(Square);

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
    red:{
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