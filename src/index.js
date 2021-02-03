import React from 'react';
import ReactDOM from 'react-dom'
import Game from './game/game.js'
import Clock from './clock/clock.js'

const myComponent = (
    <div>
        <Game />
        <Clock/>
    </div>
);

ReactDOM.render(
    myComponent,
    document.getElementById('root')
);
