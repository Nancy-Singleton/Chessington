import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from '../square';

export default class King extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentLocation = board.findPiece(this);
        const availableMoves: Square[] = [];

        availableMoves.push(Square.at(currentLocation.row + 1, currentLocation.col));
        availableMoves.push(Square.at(currentLocation.row + 1, currentLocation.col + 1));
        availableMoves.push(Square.at(currentLocation.row + 1, currentLocation.col - 1));
        availableMoves.push(Square.at(currentLocation.row, currentLocation.col + 1));
        availableMoves.push(Square.at(currentLocation.row, currentLocation.col - 1));
        availableMoves.push(Square.at(currentLocation.row - 1, currentLocation.col));
        availableMoves.push(Square.at(currentLocation.row - 1, currentLocation.col + 1));
        availableMoves.push(Square.at(currentLocation.row - 1, currentLocation.col - 1));

        return this.filterOutSquaresOutOfBounds(availableMoves, currentLocation);
    }
}
