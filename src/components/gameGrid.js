import React from 'react';
import { newArrVal } from '../conwayLogic';

class GameGrid extends React.Component {

  ternaryCell = (cell, x, y) => {
    const { board } = this.props;
    const row = newArrVal(board[y], x, cell ? 0 : 1);
    const newBoard = newArrVal(board, y, row);
    this.props.onChange(newBoard);
  }

  showCell = (cell, x, y) => {
    return (
      <div key={x}
        className='show-cell'
        onMouseDown={() => this.ternaryCell(cell, x, y)}
        style={{ backgroundColor: cell ? '#424151' : null }}
      />
    );
  }

  showRow= (row, y) => (
    <div className='row' key={y}>
      {row.map((cell, x) => this.showCell(cell, x, y))}
    </div>
  )

  render() {
    return (
      <div className='game-grid'>
        {this.props.board.map((row, y) => this.showRow(row, y))}
      </div>
    );
  }

}

export default GameGrid;