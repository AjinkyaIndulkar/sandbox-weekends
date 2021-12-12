import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    /** 
    * Square component of main Board.
    * @summary - notifies Board when button is clicked.
    * @param props - properties passed by Board component.
    * @return button element with value based on Board's current state.
    */

    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function calculateWinner(squares) {
    /** 
    * function to decide winner based on Board state.
    * @param squares - array containing Board's current state of Square components.
    * @return {ReturnValueDataTypeHere} Brief description of the returning value here.
    */

    // define winner lines
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

    // calculate winner
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        console.log(a, b, c);
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Board extends React.Component {
    /**
    * Board component to render 9 Squares, keep track of game state and declare winner.
    * @extends React.Component
    */
    constructor(props) {
        super(props);
        // define Board state
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        // handle onClick event from Square components
        const squares = this.state.squares.slice();

        // return if winner found or square already filled
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        // set Square state
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        // update Board state
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        // render Square component
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    render() {
        // calculate winner
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            // winner found
            status = 'Winner: ' + winner;
        }
        else {
            // keep playing
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        // render Board with 9 Square components
        return (
            <div>
                <div className="status">{status}</div>
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
    /**
    * Game component to render tic-tac-toe Board.
    * @extends React.Component
    */
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
