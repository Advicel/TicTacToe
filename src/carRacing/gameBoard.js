import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Cell from './cell.js';

export default function GameBoard({ board }) {
  const styles = useStyles();
  return (
    <div className={styles.gameBoard}>
      {board.matrix.map((row, rowIndex) => {
        return (
          <div className={styles.row} key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <div key={cellIndex}>
                  <Cell cell ={cell}/>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

const useStyles = makeStyles(
  {
    row: {
      display: 'flex',
    },
    gameBoard: {
      display: 'inlineBlock',
      flexDirection: 'column',
      padding: 5,
      border: '1px solid black',
      backgroundColor: 'rgb(168, 182, 171)',
    },
  },
  {
    name: 'gameBoard',
  }
);