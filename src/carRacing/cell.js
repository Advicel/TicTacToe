import { makeStyles } from '@material-ui/styles';
import React from 'react';

export default function Cell({cell}) {
    const styles = useStyles();
  return <div className = {cell.car || cell.border ? styles.car : styles.cell}>
      <div className={styles.cellInner}></div>
  </div>;
}

const useStyles = makeStyles({
    cell:{
        opacity: "0.2",
        border: "3px solid black",
        width: 18,
        height: 18,
        margin: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    cellInner:{
        backgroundColor: "black",
        width: 12,
        height: 12,
    },
    car:{
        opacity:"1",
        border: "3px solid black",
        width: 18,
        height: 18,
        margin: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
},{
    name:"cell",
});