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
        let availableMoves = [];
        availableMoves.push(this.moveForwardOne(currentLocation));
        if (this.hasNotMoved(currentLocation)) {
            availableMoves.push(this.moveForwardTwo(currentLocation));
        }
        return availableMoves;
    }

    private hasNotMoved(currentLocation: Square): boolean {
        return (this.player === Player.WHITE && currentLocation.row === 1)
            || (this.player === Player.BLACK && currentLocation.row === 6);
    }

    private moveForwardOne(currentLocation: Square): Square {
        if (this.player === Player.WHITE) {
            return Square.at(currentLocation.row + 1, currentLocation.col)
        } else {
            return Square.at(currentLocation.row - 1, currentLocation.col)
        }
    }

    private moveForwardTwo(currentLocation: Square): Square {
        if (this.player === Player.WHITE) {
            return Square.at(currentLocation.row + 2, currentLocation.col)
        } else {
            return Square.at(currentLocation.row - 2, currentLocation.col)
        }
    }
}