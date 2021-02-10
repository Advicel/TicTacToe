import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game/game.js';
import Clock from './components/clock/clock.js';
import WorldsTime from './components/worldsTime/worldsTime.js';
import CloneInput from './components/cloneInput/cloneInput.js';
import { compose,createStore } from 'redux';
import { rootReducer } from './redux/rootReducer.js';
import { Provider } from 'react-redux';
//import CarRacing from "./carRacing/carRacing.js";

const store = createStore(rootReducer,compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const myComponent = (
  <Provider store={store}>
    <div>
      <Clock />
      <WorldsTime />
      <Game />
      <CloneInput />
      {/* <CarRacing/> */}
    </div>
  </Provider>
);

ReactDOM.render(myComponent, document.getElementById('root'));
