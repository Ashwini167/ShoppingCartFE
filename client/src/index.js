import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ShoppingList from './components/ShoppingList';
import Game from './components/Game';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<ShoppingList name='Ashwini'/>, document.getElementById('root'));
ReactDOM.render(<Game />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
