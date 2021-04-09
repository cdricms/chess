import Piece, { LAST_MOVES } from "./Piece";
import { file } from "../../interfaces/grid";
import Square from "../Square";
import { SQUARES } from "../Grid";
import { grid } from "../../sketch";

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

  public enPassantString = "-";

  private frontMove() {
    const order = this.color === "white" ? -1 : 1;
    const moves = [];

    const forwardSquare = SQUARES[this.square.index + 8 * order];
    if (forwardSquare && forwardSquare.piece === null) {
      moves.push(forwardSquare);
    }

    if (this.history.length === 1 && forwardSquare.piece === null) {
      const secondSquare = SQUARES[this.square.index + 16 * order];
      if (secondSquare && secondSquare.piece === null) moves.push(secondSquare);
    }

    const enemies: Square[] = [];

    const enemyOne = grid.grid[this.drawingCoords.j + 1 * order]
      ? grid.grid[this.drawingCoords.j + 1 * order][this.drawingCoords.i + 1]
      : null;
    const enemyTwo = grid.grid[this.drawingCoords.j + 1 * order]
      ? grid.grid[this.drawingCoords.j + 1 * order][this.drawingCoords.i - 1]
      : null;

    if (
      enemyOne &&
      enemyOne.piece &&
      enemyOne.piece.color !== this.color &&
      enemyOne.piece.type !== "king"
    )
      enemies.push(enemyOne);
    if (
      enemyTwo &&
      enemyTwo.piece &&
      enemyTwo.piece.color !== this.color &&
      enemyTwo.piece.type !== "king"
    )
      enemies.push(enemyTwo);

    moves.push(...enemies);

    return moves;
  }

  public didIMoveTwoSquares() {
    const prev = this.history[this.history.length - 2];
    const last = this.history[this.history.length - 1];

    if (prev && last) {
      return Math.abs(prev.rank - last.rank) === 2;
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

    this.canEatOnEnPassant = [];
    this.enPassantString = "-";

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

        if (eatOnSquare && !eatOnSquare.piece) {
          this.canEatOnEnPassant.push({
            eatOnSquare,
            pieceToEat: square.piece as Pawn
          });
          this.enPassantString = `${eatOnSquare.coords.file.toLowerCase()}${
            eatOnSquare.coords.rank
          }`;

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
