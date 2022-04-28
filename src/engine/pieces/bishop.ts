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

        const availableMoves = (new Array).concat(
            this.getForwardsDiagonalMoves(currentLocation),
            this.getBackwardsDiagonalMoves(currentLocation));

        return this.filterOutCurrentLocation(availableMoves,currentLocation);
    }
}