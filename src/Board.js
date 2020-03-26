import React, { Component } from 'react';

function Square(props) {
    const {value} = props;
    return (
      <button className="square" onClick={props.onClick}>
        {value}
      </button>
    );
}

export class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  } 

  handleClick(i) {
    let {squares, xIsNext} = this.state;
        squares = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({squares: squares, xIsNext: !xIsNext});
  }
  renderSquare(i) {
    const {squares} = this.state;
    return (
      <Square
        value={squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
 
  handleBoardRestart = () => {
    this.setState({squares: Array(9).fill(null), xIsNext: true}); 
  }

  render() {
    const {squares, xIsNext} = this.state;
    const winner = calculateWinner(squares);
    const allBoxesFilled = areAllBoxesClicked(squares);
    let status;
    if (winner) {
      status = 'The Winner is : ' + winner;
    } else if(!winner && allBoxesFilled) {
      status = 'Match drawn.Please start new game';
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>        
        <button className="reset-button" onClick={this.handleBoardRestart}>Reset Game</button>
      </div>
    );
  }
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

function areAllBoxesClicked(squares){
      let count = 0;
      squares.forEach(function (item) {        
        if (item !== null) {           
            count++
        }
      })
      if (count === 9) {
        return true
      } else {
        return false
      }
}
