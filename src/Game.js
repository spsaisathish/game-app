import React, { Component } from 'react';
import {Board} from './Board';
export class Game extends Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>             
        </div>
      );
    }
}