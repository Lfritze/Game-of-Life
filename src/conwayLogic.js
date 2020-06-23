export const notDead = 1;
export const notAlive = 0;
export const boardAcreage = 50;
export const speedKills = 100;

// Find our neighbors
export const VonNeumannNeighbors = (x, y) => {
    return [[x - 1, y - 1], [x, y - 1], [x + 1, y - 1], [x - 1, y], [x + 1, y], [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]]
        .filter(c =>
            von[0] >= 0 && von[0] < boardAcreage &&
            von[1] >= 0 && von[1] < boardAcreage
        );
}

export const aliveNeighbors = (board, x, y) => {
    return VonNeumannNeighbors(x, y).filter(n => board[n[0]][n[1]] === notDead).length;
}

export const nextGeneration = board => {
    let newBoard = makeBoard();
    for (let x = 0; x < boardAcreage; x++) {
        for (let y = 0; y < boardAcreage; y++) {
            const alive = aliveNeighbors(board, x, y);
            const cell = board[x][y];
            newBoard[x][y] = (alive === 3 || (alive === 2 && cell === notDead)) ? notDead : notAlive;
        }
    }
    return newBoard;
}

export const createBoard = () => {
    return Array(boardAcreage).fill().map(() => Array(boardAcreage).fill(notAlive));
}

export const changeArrayValue = (arr, i, val) => [
    ...arr.slice(0, i), val, ...arr.slice(i + 1)
];

export const randomMix = board => board.map(row => row.map(cell => Math.round(Math.random())));