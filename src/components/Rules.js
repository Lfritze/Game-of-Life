import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimplePopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>

          <p> 
          The Game of Life is an infinite, two-dimensional grid of square cells, each of which is in one of two possible states, live or dead.</p>

          <p> Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
            <ul>
              <li> Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
          
              <li>Any live cell with two or three live neighbours lives on to the next generation.</li>

              <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>

              <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
            </ul>

          These rules, which compare the behavior of the automaton to real life, can be condensed into the following:
            <ul>
              <li>Any live cell with two or three live neighbours survives.</li>

              <li>Any dead cell with three live neighbours becomes a live cell.</li>

              <li>All other live cells die in the next generation.</li>

              <li>Similarly, all other dead cells stay dead.</li>
          </ul>
          
          The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.</p>
        
        </div>
      </Popper>
    </div>
  );
}