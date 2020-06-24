## Implemented in React
## John Conway's Game of Life
Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.

So what is a Turing Complete?

A Turing Complete system means a system in which a program can be written that will find an answer (although with no guarantees regarding runtime or memory).

[Source:](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## Cellular Automata and The Game of Life
A cellular automaton (plural: cellular automata, abbreviated CA) is a program that operates on data typically stored in a 2D grid. (1D, 3D and n-D cellular automata run on lines, cubes, etc.)

A simple set of rules describes how the value in a cell on the grid changes over time, often as the result of the states of that cell's neighbors.

Sometimes neighbors includes the 4 orthogonally adjacent cells; sometimes it includes all 8 surrounding cells including diagonals.

Each round of the simulation examines the current state of the grid, and then produces an entirely new grid consisting of the old state. (Remember the discussion about double buffers earlier--we don't want to modify the same grid we're examining, lest we munge future results.)

This new grid becomes the "current" state of the simulation, and the process repeats. Each new grid is referred to as a generation.

The beautiful thing about cellular automata is that sometimes very complex behavior can emerge from very simple rules.

Practically speaking, CAs have been used in biological and chemical simulations and other areas of research, such as CA-based computer processors, and other numeric techniques.

## Rules

The Game of Life is an infinite, two-dimensional grid of square cells, each of which is in one of two possible states, live or dead.

Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

  * Any live cell with fewer than two live neighbours dies, as if by underpopulation.
  * Any live cell with two or three live neighbours lives on to the next generation.
  * Any live cell with more than three live neighbours dies, as if by overpopulation.
  * Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  
These rules, which compare the behavior of the automaton to real life, can be condensed into the following:
  * Any live cell with two or three live neighbours survives.
  * Any dead cell with three live neighbours becomes a live cell.
  * All other live cells die in the next generation.
  * Similarly, all other dead cells stay dead.
  
The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.
In the project directory, you can run:

## Project Implementation
1. The Game Board is a Class Component (gameGrid.js)
  * The grid is created using divs
  * The cell borders are created in CSS
  
2. The data structure utilizes the Moore Neighborhood of 8 neighbors- Pixel Connectivity
  * [x - 1, y - 1], [x, y - 1], [x + 1, y - 1], [x - 1, y], [x + 1, y], [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
  * 8-connected pixels are neighbors to every pixel that touches one of their edges or corners. 
  * Note this is similar to the array of operations:   
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]


### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

