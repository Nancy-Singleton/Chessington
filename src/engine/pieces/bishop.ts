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

        return availableForwardsMoves.concat(availableBackwardsMoves);
    }

    private getAvailableForwardsMoves(currentLocation: Square) {
        const availableForwardsMoves: Square[] = [];

        const offset = Math.abs(currentLocation.row - currentLocation.col);

        if (currentLocation.row >= currentLocation.col) {

            for (let i = 0; i + offset < GameSettings.BOARD_SIZE; i++) {
                const newSquare = Square.at(i + offset, i);

                if (!newSquare.equals(currentLocation)) {
                    availableForwardsMoves.push(newSquare);
                }
            }
        }

        if (currentLocation.row < currentLocation.col) {

            for (let i = 0; i + offset < GameSettings.BOARD_SIZE; i++) {
                const newSquare = Square.at(i, i + offset);

                if (!newSquare.equals(currentLocation)) {
                    availableForwardsMoves.push(newSquare);
                }
            }
        }

        return availableForwardsMoves;
    }

    private getAvailableBackwardsMoves(currentLocation: Square) {
        const availableBackwardsMoves: Square[] = [];
        const total = currentLocation.row + currentLocation.col;
        const minIndex = 0;
        const maxIndex = GameSettings.BOARD_SIZE - 1;

        if (currentLocation.row >= currentLocation.col) {
            const lengthOfDiagonal = GameSettings.BOARD_SIZE - Math.abs(total - maxIndex);
            for (let i = 0; i < lengthOfDiagonal; i++) {
                const newSquare = Square.at(maxIndex - i, total - (maxIndex - i));

                if (!newSquare.equals(currentLocation)) {
                    availableBackwardsMoves.push(newSquare);
                }
            }
        }

        if (currentLocation.row < currentLocation.col) {
            const lengthOfDiagonal = GameSettings.BOARD_SIZE - Math.abs(total - maxIndex);
            for (let i = 0; i < lengthOfDiagonal; i++) {
                const newSquare = Square.at(minIndex + i, total - (minIndex + i));

                if (!newSquare.equals(currentLocation)) {
                    availableBackwardsMoves.push(newSquare);
                }
            }
        }

        return availableBackwardsMoves;
    }
}
