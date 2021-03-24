import Piece, { LAST_MOVES } from "./Piece";
import { file } from "../../interfaces/grid";
import Square from "../Square";
import { SQUARES } from "../Grid";
import { fen, grid } from "../../sketch";

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

    const enemyOne =
      grid.grid[this.drawingCoords.j + 1 * order][this.drawingCoords.i + 1];
    const enemyTwo =
      grid.grid[this.drawingCoords.j + 1 * order][this.drawingCoords.i - 1];

    if (enemyOne && enemyOne.piece && enemyOne.piece.color !== this.color)
      enemies.push(enemyOne);
    if (enemyTwo && enemyTwo.piece && enemyTwo.piece.color !== this.color)
      enemies.push(enemyTwo);

    moves.push(...enemies);

    return moves;
  }

  public didIMoveTwoSquares() {
    const prev = this.history[this.history.length - 2].rank;
    const last = this.history[this.history.length - 1].rank;

    if (prev && last) {
      return Math.abs(prev - last) === 2;
    }

    return false;
  }

  private enPassant() {
    const moves: Square[] = [];
    const leftSquare =
      this.position.file === "A" ? null : SQUARES[this.square.index - 1];
    const rightSquare =
      this.position.file === "H" ? null : SQUARES[this.square.index + 1];

    const squares = [leftSquare, rightSquare];

    squares.forEach((square) => {
      if (
        square &&
        square.piece &&
        square.piece.color !== this.color &&
        square.piece.type === "pawn" &&
        (square.piece as Pawn).didIMoveTwoSquares() &&
        LAST_MOVES[1].piece === square.piece
      ) {
        const order = this.color === "white" ? -1 : 1;
        const eatOnSquare = SQUARES[square.index + 8 * order];

        console.log("Last move", LAST_MOVES[1]);
        console.log("Square:", square);

        if (eatOnSquare && !eatOnSquare.piece) {
          this.canEatOnEnPassant.push({
            eatOnSquare,
            pieceToEat: square.piece as Pawn
          });
          moves.push(eatOnSquare);
        }
      }
    });

    return moves;
  }

  public combineMoves() {
    const moves = this.frontMove();
    const enPassant = this.enPassant();
    this.availableMoves = [...moves, ...enPassant];
    return moves;
  }
}
