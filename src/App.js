import React, { Component } from 'react';
import './App.css';
import {Game} from './Game';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Tic Tac Toe'
    };
  }
  render() {
    return (
      <div>
          <Game/>
      </div>
    );
  }
}

export default App;

