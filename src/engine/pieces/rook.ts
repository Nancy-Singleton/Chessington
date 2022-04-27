import Piece from './piece';
import Board from "../board";
import Player from "../player";
import GameSettings from '../gameSettings';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentLocation = board.findPiece(this);

        let availableHorizontalMoves = this.getAvailableHorizontalMoves(currentLocation);
        let availableVerticalMoves = this.getAvailableVerticalMoves(currentLocation);

        return availableHorizontalMoves.concat(availableVerticalMoves);
    }

    getAvailableHorizontalMoves(currentLocation: Square) {
        let availableHorizontalMoves: Square[] = [];

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            let newSquare = Square.at(currentLocation.row, i);
            if (!newSquare.equals(currentLocation)) {
                availableHorizontalMoves.push(newSquare);
            }
        }

        return availableHorizontalMoves;
    }

    getAvailableVerticalMoves(currentLocation: Square) {
        let availableVerticalMoves: Square[] = [];

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            let newSquare = Square.at(i, currentLocation.col);
            if (!newSquare.equals(currentLocation)) {
                availableVerticalMoves.push(newSquare);
            }
        }

        return availableVerticalMoves;
    }
}


