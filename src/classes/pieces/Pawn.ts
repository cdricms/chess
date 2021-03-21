import Piece, { LAST_MOVES } from "./Piece";
import { file } from "../../interfaces/grid";
import Square from "../Square";
import { SQUARES } from "../Grid";
import { fen } from "../../sketch";

export default class Pawn extends Piece {
  canEatOnEnPassant: { eatOnSquare: Square; pieceToEat: Pawn }[];

  constructor(
    readonly color: "black" | "white",
    readonly position: { file: file; rank: number },
    readonly size: number,
    readonly square: Square,

    readonly symbol: string
  ) {
    super("pawn", square, symbol, color, position, size);
    this.canEatOnEnPassant = [];
  }

  private frontMove() {
    const order = this.color === "white" ? -1 : 1;
    const moves = [];

    const forwardSquare = SQUARES[this.square.index + 8 * order];
    if (forwardSquare && forwardSquare.piece === null) {
      // console.log(this, forwardSquare.piece);
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

  private didIJustMoveTwoSquares() {
    if (this.history.length === 2) {
      const firstSquare = this.history[0];
      const secondSquare = this.history[1];
      console.log(this, secondSquare.rank - firstSquare.rank);
      return Math.abs(secondSquare.rank - firstSquare.rank) === 2;
    }

    return false;
  }

  public enPassant() {
    if (this.didIJustMoveTwoSquares()) {
      const leftSquare = SQUARES[this.square.index - 1];
      const rightSquare = SQUARES[this.square.index + 1];

      const squares = [leftSquare, rightSquare];

      squares.forEach((square) => {
        if (
          square.piece &&
          square.piece.color !== this.color &&
          square.piece.type === "pawn"
        ) {
          const order = this.color === "white" ? 1 : -1;
          const eatOnSquare = SQUARES[this.square.index + 8 * order];
          if (!eatOnSquare.piece) {
            const pawn = square.piece as Pawn;
            console.log("hello", pawn);
            pawn.canEatOnEnPassant = [
              ...pawn.canEatOnEnPassant,
              { eatOnSquare, pieceToEat: this }
            ];
            pawn.canEatOnEnPassant.forEach((item) => {
              pawn.availableMoves.push(item.eatOnSquare);
            });
            console.log("yo", pawn.availableMoves);
          }
        }
      });
    }
  }

  public combineMoves() {
    const moves = this.frontMove();
    this.availableMoves = [...moves];
    return moves;
  }
}
