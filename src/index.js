import React from "react";
import ReactDOM from "react-dom";
import Game from "./game/game.js";
import Clock from "./clock/clock.js";
import WorldsTime from "./worldsTime/worldsTime.js";
import CloneInput from "./cloneInput/cloneInput.js";

const myComponent = (
  <div>
    <Clock />
    <WorldsTime />
    <CloneInput />
    <Game />
  </div>
);

ReactDOM.render(myComponent, document.getElementById("root"));