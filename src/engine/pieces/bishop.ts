import Piece from './piece';
import Board from "../board";
import Player from "../player";
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        const currentLocation = board.findPiece(this);

        const availableForwardsMoves = this.getAvailableForwardsMoves(currentLocation);
        const availableBackwardsMoves = this.getAvailableBackwardsMoves(currentLocation);
        const availableMoves = availableForwardsMoves.concat(availableBackwardsMoves);

        return availableMoves.filter(square => {
            return !square.equals(currentLocation);
        });
    }

    private getAvailableForwardsMoves(currentLocation: Square) {
        const offset = Math.abs(currentLocation.row - currentLocation.col);
        const lengthOfDiagonal = GameSettings.BOARD_SIZE - offset;

        const availableForwardsMoves = Array(lengthOfDiagonal).fill(undefined);

        if (this.inTopLeftOfBoard(currentLocation)) {
            return availableForwardsMoves.map((square, i) => {
                return Square.at(i + offset, i);
            });
        } else {
            return availableForwardsMoves.map((square, i) => {
                return Square.at(i, i + offset);
            });
        }
    }

    private getAvailableBackwardsMoves(currentLocation: Square) {
        const offset = Math.abs(currentLocation.row - currentLocation.col);
        const total = currentLocation.row + currentLocation.col;
        const maxIndex = GameSettings.BOARD_SIZE - 1;
        const lengthOfDiagonal = GameSettings.BOARD_SIZE - Math.abs(total - maxIndex);

        const availableBackwardsMoves = Array(lengthOfDiagonal).fill(undefined);

        if (this.inTopLeftOfBoard(currentLocation)) {
            return availableBackwardsMoves.map((square, i) => {
                return Square.at(maxIndex - i, total - (maxIndex - i));
            });
        } else {
            return availableBackwardsMoves.map((square, i) => {
                return Square.at(i, total - i);
            });
        }
    }

    private inTopLeftOfBoard(currentLocation: Square) {
        return currentLocation.row >= currentLocation.col;
    }
}