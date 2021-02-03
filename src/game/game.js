import React, { useState } from 'react'
import './styles/game.css'
import Board from './board.js'

let status;

export default function Game(){
    const [history,setHistory] = useState([{
        squares: Array(9).fill(null),
        posX: null,
        posY: null,
    }])
    const [stepNumber,setStepNumber] = useState(0);
    const [xIsNext,setXisNext] = useState(true);

    const handleClick = (i) => {
        fetch("http://worldtimeapi.org/api/timezone/Europe/Samara")
            .then(res=>res.json()).then(result=>console.log(result))
        const current = history[stepNumber];
        const squares = current.squares.slice();

        if(calculateWinner(squares) || squares[i]){
            return
        }
        squares[i] = xIsNext ? "X" : "O";
        setHistory(history.concat([{
            squares: squares,
            posY: Math.trunc( i / 3 ),
            posX: i > 2 ? i % 3 : i ,
        }]));

        setStepNumber(history.length);
        setXisNext(!xIsNext);       
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setXisNext(step % 2 === 0)
    }
    
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares)

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
        <div className="game">
            <div className="game-board">
                <Board 
                    squares = {current.squares}
                    onClick = {(i) => handleClick(i) }
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
            <ol>{moves}</ol>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
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
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}