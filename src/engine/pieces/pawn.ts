import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentLocation = board.findPiece(this);
        const availableMoves = [];
        availableMoves.push(this.locationIfMoveForwardOne(currentLocation));
        if (this.hasNotMoved(currentLocation)) {
            availableMoves.push(this.locationIfMoveForwardTwo(currentLocation));
        }
        return availableMoves;
    }

    private hasNotMoved(currentLocation: Square): boolean {
        return (this.player === Player.WHITE && currentLocation.row === 1)
            || (this.player === Player.BLACK && currentLocation.row === 6);
    }

    private locationIfMoveForwardOne(currentLocation: Square): Square {
        if (this.player === Player.WHITE) {
            return Square.at(currentLocation.row + 1, currentLocation.col)
        } else {
            return Square.at(currentLocation.row - 1, currentLocation.col)
        }
    }

    private locationIfMoveForwardTwo(currentLocation: Square): Square {
        if (this.player === Player.WHITE) {
            return Square.at(currentLocation.row + 2, currentLocation.col)
        } else {
            return Square.at(currentLocation.row - 2, currentLocation.col)
        }
    }
}