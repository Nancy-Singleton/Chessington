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

        const availableMoves = (new Array).concat(
            this.getHorizontalMoves(currentLocation),
            this.getVerticalMoves(currentLocation));

        return this.filterOutCurrentLocation(availableMoves,currentLocation);
    }
}


