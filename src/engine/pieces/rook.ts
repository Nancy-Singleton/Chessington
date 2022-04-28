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

        const availableHorizontalMoves = this.getAvailableHorizontalMoves(currentLocation);
        const availableVerticalMoves = this.getAvailableVerticalMoves(currentLocation);

        return availableHorizontalMoves.concat(availableVerticalMoves);
    }

    private getAvailableHorizontalMoves(currentLocation: Square) {
        return Array(GameSettings.BOARD_SIZE)
            .fill(undefined)
            .map((item, index) => {
                return Square.at(currentLocation.row, index);
            }).filter(square => {
                return !square.equals(currentLocation);
            });
    }

    private getAvailableVerticalMoves(currentLocation: Square) {
        return Array(GameSettings.BOARD_SIZE)
            .fill(undefined)
            .map((item, index) => {
                return Square.at(index, currentLocation.col);
            }).filter(square => {
                return !square.equals(currentLocation);
            });
    }
}


