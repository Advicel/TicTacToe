import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import GameBoard from './gameBoard.js';
import Car from './entities/car.js';
import Board from './entities/board.js';

let timer;

export default function CarRacing(params) {
  const styles = useStyles();
  const [playerCar, setPlayerCar] = useState(new Car(true));
  const [board, setBoard] = useState(new Board());
  const [isPlaying, setIsPlaying] = useState(false);
  const [enemyCars, setEnemyCars] = useState([]);
  const [speed, setSpeed] = useState(200);
  const [myInterval, setMyInterval] = useState(null);
  const [space, setSpace] = useState(0);
  const [boost, setBoost] = useState(false);
  const [move, setMove] = useState(false);

  useEffect(() => {
    board.addCar(playerCar);
    enemyCars.push(new Car(false));
  }, []);
  //   useEffect(()=>{
  //       update();
  //   },[move]);

  useEffect(() => {
    timer = setInterval(() => {
      update();
    }, speed);
    return () => clearInterval(timer);
    //     setMyInterval(
    //       setTimeout(function gameSpeed() {
    //         if (isPlaying) {
    //           update(board);
    //           setMyInterval(setTimeout(gameSpeed, speed));
    //         }
    //       }, speed)
    //     );
  });
  const update = () => {
    setSpace(space + 1);

    if (space >= 9) {
      setSpace(0);
      const cars = [...enemyCars];
      cars.push(new Car(false));
      setEnemyCars(cars);
      enemyCars.push(new Car(false));
    }

    enemyCars.forEach((car) => {
      board.removeCar(car);
      car.move();
      board.addCar(car);
    });

    if (enemyCars[0].coordinates[6].y >= board.height) {
      enemyCars.splice(0, 1);
      setSpeed(speed * 0.98);
      //score++;
      // if (score>highScore) {
      //     document.querySelector(".highScore").textContent = score;
      // }
      // document.querySelector(".score").textContent = score;
    }
    board.moveBorder();
    board.addCar(playerCar);
    //addCellClasses(board.matrix)

    // if(isLosing(enemyCars,myCar)) {
    //     loseHandler()
    // }
  };
  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'ArrowRight' ||
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowUp' ||
      event.key === 'ArrowDown'
    ) {
      event.preventDefault();
      //if (!isPlaying) {return;};
    }
    if (event.key === 'ArrowUp' && !boost) {
      setBoost(true);
      setSpeed(speed * 0.6);
    }
    if (
      (event.key === 'ArrowRight' && playerCar.position === 'left') ||
      (event.key === 'ArrowLeft' && playerCar.position === 'right')
    ) {
      board.removeCar(playerCar);
      playerCar.move();
      board.addCar(playerCar);
      //setMove(!move);
      //updateOnMove();
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp' && boost && isPlaying) {
      setSpeed(speed / 0.6);
      setBoost(false);
    }
  });

  return (
    <div className={styles.gameWrapper}>
      <GameBoard board={board} />
    </div>
  );
}

const useStyles = makeStyles(
  {
    gameWrapper: {
      padding: 5,
      border: '2px solid black',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'rgb(43,89,238)',
    },
  },
  {
    name: 'carRacing',
  }
);

