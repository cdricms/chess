import Piece from "./Piece";
import { file } from "../../interfaces/grid";
import Square from "../Square";
import { SQUARES } from "../Grid";

export default class Pawn extends Piece {
  constructor(
    readonly color: "dark" | "white",
    readonly position: { file: file; rank: number },
    readonly size: number,
    readonly square: Square
  ) {
    super("pawn", square, color, position, size);
    this.availablesMoves = this.frontMove();
    console.log(this.availablesMoves, this);
  }

  private frontMove() {
    const order = this.color === "white" ? -1 : 1;
    const moves = [];

    const forwardSquare = SQUARES[this.square.index + 8 * order];
    if (forwardSquare) moves.push(forwardSquare);

    if (this.history.length === 1 && !forwardSquare.piece) {
      const secondSquare = SQUARES[this.square.index + 16 * order];

      console.log(secondSquare);
      if (secondSquare && secondSquare.piece === null) moves.push(secondSquare);
    }

    // const enemies: Square[] = [];

    // const enemyOne = SQUARES[this.square.index + 7 * order];
    // const enemyTwo = SQUARES[this.square.index + 9 * order];

    // if (enemyOne.piece && enemyOne.piece.color !== this.color)
    //   enemies.push(enemyOne);
    // if (enemyTwo.piece && enemyTwo.piece.color !== this.color)
    //   enemies.push(enemyTwo);

    // moves.push(...enemies);

    return moves;
  }
}
