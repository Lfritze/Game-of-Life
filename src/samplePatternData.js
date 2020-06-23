import { notDead, boardAcreage, makeBoard } from './conwayLogic';

export const SamplePatternData = preset => {
    let newboard = makeBoard();
    switch (preset) {

        case 'glider':
            return glider(newboard);

        default:
            return newboard;
    }
}



const glider = board => {
    board[3][1] = notDead;
    board[3][2] = notDead;
    board[3][3] = notDead;
    board[2][3] = notDead;
    board[1][2] = notDead;
    return board;
}

