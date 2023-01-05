import React from 'react';
import './tictactoe.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import { color, fontFamily } from '@mui/system';
import { Grid } from '@mui/material';

import PlayerLogin from "./Login";

function Square(props) {

  if (props.value == "X") {
    
    return (
      <button style={{color: "yellow"}}
        className="square" 
        onClick={props.onClick}
      >
        {props.value}
      </button>
    );
  }
  else {
    return (
      <button style={{color: "blue"}}
        className="square" 
        onClick={props.onClick}
      >
        {props.value}
      </button>
    );
  }
    }
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}      
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
      }
    }
    
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length -1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step,move) => {
        const desc = move ?
        'Go to move #' + move :
        'Reset';
        return (
          <li key={move}>
            <Button variant="contained" onClick={() => this.jumpTo(move)}>{desc}</Button>
          </li>
        );
      });
      
      let status;
      if (winner) {
        status = winner +' is the Winner  !!!';
      } else if (this.state.stepNumber === 9) {
        status = "It's a tie"
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div className="game" >
          <Grid container spacing={2}>
            <Grid item xs={4} className='player-info'>
              <body style={{color: "purple"}}>Player 1: X</body>
              <body style={{color: "yellow"}}>Player 2: O</body>
            </Grid>
            <Grid item xs={4} className="game-play">
              <h1>TIC TAC TOE</h1>
              <body>{status}</body>
              <div className="game-board">
                <Board 
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
                />
              </div>
              <ol>{moves[0]}</ol>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
  
  // ========================================
  
  // const tictactoe = ReactDOM.createRoot(document.getElementById("root"));
  // tictactoe.render(<Game />);

  export default Game;

  // ========================================


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