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

        if (this.player === Player.WHITE) {
            availableMoves.push(Square.at(currentLocation.row + 1, currentLocation.col));
        }
        if (this.player === Player.BLACK) {
            availableMoves.push(Square.at(currentLocation.row - 1, currentLocation.col));
        }

        return availableMoves;
    }
}
