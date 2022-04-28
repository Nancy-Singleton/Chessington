import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Knight extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentLocation = board.findPiece(this);
        const availableMoves: Square[] = [];

        availableMoves.push(Square.at(currentLocation.row + 2, currentLocation.col + 1));
        availableMoves.push(Square.at(currentLocation.row + 2, currentLocation.col - 1));
        availableMoves.push(Square.at(currentLocation.row - 2, currentLocation.col + 1));
        availableMoves.push(Square.at(currentLocation.row - 2, currentLocation.col - 1));
        availableMoves.push(Square.at(currentLocation.row + 1, currentLocation.col + 2));
        availableMoves.push(Square.at(currentLocation.row + 1, currentLocation.col - 2));
        availableMoves.push(Square.at(currentLocation.row - 1, currentLocation.col + 2));
        availableMoves.push(Square.at(currentLocation.row - 1, currentLocation.col - 2));

        return this.filterOutSquaresOutOfBounds(availableMoves, currentLocation);
    }

    filterOutSquaresOutOfBounds(availableMoves: Square[], currentLocation: Square) {
        return availableMoves.filter(square => {
            const rowInBounds = 0 <= currentLocation.row && currentLocation.row < GameSettings.BOARD_SIZE;
            const colInBounds = 0 <= currentLocation.col && currentLocation.col < GameSettings.BOARD_SIZE;

            return rowInBounds && colInBounds;
        });
    }
}