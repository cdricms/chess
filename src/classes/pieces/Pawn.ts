import Piece from "./Piece";
import { file } from "../../interfaces/grid";
import Square from "../Square";
import { SQUARES } from "../Grid";

export default class Pawn extends Piece {
  constructor(
    readonly color: "black" | "white",
    readonly position: { file: file; rank: number },
    readonly size: number,
    readonly square: Square,

    readonly symbol: string
  ) {
    super("pawn", square, symbol, color, position, size);
  }

  private frontMove() {
    const order = this.color === "white" ? -1 : 1;
    const moves = [];

    const forwardSquare = SQUARES[this.square.index + 8 * order];
    if (forwardSquare && forwardSquare.piece === null) {
      console.log(this, forwardSquare.piece);
      moves.push(forwardSquare);
    }

    if (this.history.length === 1 && forwardSquare.piece === null) {
      const secondSquare = SQUARES[this.square.index + 16 * order];
      if (secondSquare && secondSquare.piece === null) moves.push(secondSquare);
    }

    const enemies: Square[] = [];

    const enemyOne = SQUARES[this.square.index + 7 * order];
    const enemyTwo = SQUARES[this.square.index + 9 * order];

    if (
      enemyOne.piece &&
      enemyOne.piece.color !== this.color &&
      this.position.file !== "A"
    )
      enemies.push(enemyOne);
    if (
      enemyTwo.piece &&
      enemyTwo.piece.color !== this.color &&
      this.position.file !== "H"
    )
      enemies.push(enemyTwo);

    moves.push(...enemies);

    return moves;
  }

  public combineMoves() {
    const moves = this.frontMove();
    this.availablesMoves = moves;
    return moves;
  }
}
