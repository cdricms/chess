import Piece from "./Piece";
import { file } from "../../interfaces/grid";
import Square from "../Square";
import { SQUARES } from "../Grid";

export default class Knight extends Piece {
  constructor(
    readonly color: "black" | "white",
    readonly position: { file: file; rank: number },
    readonly size: number,
    readonly square: Square
  ) {
    super("knight", square, color, position, size);

    this.availablesMoves = this.move();
  }

  private move() {
    const m = SQUARES.filter((square) => {
      if (
        (square.coords.i === this.drawingCoords.i - 1 &&
          square.coords.j === this.drawingCoords.j - 2) ||
        (square.coords.i === this.drawingCoords.i - 2 &&
          square.coords.j === this.drawingCoords.j - 1) ||
        (square.coords.i === this.drawingCoords.i - 2 &&
          square.coords.j === this.drawingCoords.j + 1) ||
        (square.coords.i === this.drawingCoords.i - 1 &&
          square.coords.j === this.drawingCoords.j + 2) ||
        (square.coords.i === this.drawingCoords.i + 1 &&
          square.coords.j === this.drawingCoords.j - 2) ||
        (square.coords.i === this.drawingCoords.i + 2 &&
          square.coords.j === this.drawingCoords.j - 1) ||
        (square.coords.i === this.drawingCoords.i + 2 &&
          square.coords.j === this.drawingCoords.j + 1) ||
        (square.coords.i === this.drawingCoords.i + 1 &&
          square.coords.j === this.drawingCoords.j + 2)
      ) {
        return square;
      }
    });

    return this.getPossibleMoves(m);
  }

  public combineMoves() {
    const moves = this.move();
    this.availablesMoves = moves;
    return moves;
  }
}
