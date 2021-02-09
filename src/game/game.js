import React, { useState } from 'react';
import Board from './board.js';
import { makeStyles } from '@material-ui/styles';

let status;

export default function Game(){
    
    const classes = useStyles();

    const [history,setHistory] = useState([{
        squares: Array(9).fill({
            value:null,
            isWin:false,
        }),
        posX: null,
        posY: null,
    }]);

    const [stepNumber,setStepNumber] = useState(0);
    const [xIsNext,setXisNext] = useState(true);

    const handleClick = (i) => {
        
        const current = history[stepNumber];
        const squares = [...current.squares];
        const newSquareValue = {value:xIsNext ? "X" : "O", isWin:false};
        if(calculateWinner(squares) || squares[i].value){
            return;
        }
        squares[i] = newSquareValue;
        //squares[i].value = xIsNext ? "X" : "O"
        setHistory(history.concat([{
            squares: squares,
            posY: Math.trunc( i / 3 ),
            posX: i > 2 ? i % 3 : i ,
        }]));

        setStepNumber(history.length);
        setXisNext(!xIsNext);       
    };

    const calculateWinner = (squares)=> {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = [squares[lines[i][0]],squares[lines[i][1]],squares[lines[i][2]]];
            if (a.value && a.value === b.value && a.value === c.value) {
                lines[i].map(x => history[stepNumber].squares[x].isWin = true);
                return a.value;
            }
        }
        return null;
    };
    const jumpTo = (step) => {
        history[stepNumber].squares.map(x => x.isWin = false);
        
        setStepNumber(step);
        setXisNext(step % 2 === 0);
        setHistory(history.slice(0, step + 1));
    };
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step,move)=>{
        const desc = move ? 
            "Перейти к ходу #" + move + " (x: "+ history[move].posX + " y: "+ history[move].posY +")" :   
            "К началу игры";
        return (
            <li key = {move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    if(winner){
        status = "Победил " + winner;
    }else if(history.length === 10){
        status = "Ничья";
    }else {
        status = 'Следующий ход: ' + (xIsNext ? "X" : "O");
    }
        
    return (
        <div className={classes.game}>
                <Board 
                    classes = {{gameBoard:classes.fancyGameBoard}}
                    squares = {current.squares}
                    onClick = {(i) => handleClick(i) }
                />
            <div className={classes.gameInfo}>
                <div>{status}</div>
            <ol>{moves}</ol>
            </div>
        </div>
    );
}

const useStyles = makeStyles({
    fancyGameBoard:{
        border:"2px solid red",
    },
    game:{
        textAlign:"center",
        marginTop:20,
    },
    gameInfo:{
        textAlign:'center',
    },
}, {
    index: 1,
    name: "game",
});