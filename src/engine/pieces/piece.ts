import Board from "../board";
import Square from "../square";
import Player from "../player";
import GameSettings from "../gameSettings";

export default class Piece {
    constructor(public readonly player: Player) {
    }

    getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    protected inTopLeftOfBoard(currentLocation: Square) {
        return currentLocation.row >= currentLocation.col;
    }

    protected getHorizontalMoves(currentLocation: Square) {
        return Array(GameSettings.BOARD_SIZE)
            .fill(undefined)
            .map((item, index) => {
                return Square.at(currentLocation.row, index);
            });
    }

    protected getVerticalMoves(currentLocation: Square) {
        return Array(GameSettings.BOARD_SIZE)
            .fill(undefined)
            .map((item, index) => {
                return Square.at(index, currentLocation.col);
            });
    }

    protected getForwardsDiagonalMoves(currentLocation: Square) {
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

    protected getBackwardsDiagonalMoves(currentLocation: Square) {
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

    protected filterOutCurrentLocation(availableMoves: Square[], currentLocation: Square) {
        return availableMoves.filter(square => {
            return !square.equals(currentLocation);
        })
    }
}
