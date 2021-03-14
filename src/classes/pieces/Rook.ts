import Piece from "./Piece";
import { file } from "../../interfaces/grid";
import Square from "../Square";
import { rookMoves } from "./movements/moves";

export default class Rook extends Piece {
  constructor(
    readonly color: "black" | "white",
    readonly position: { file: file; rank: number },
    readonly size: number,
    readonly square: Square,

    readonly symbol: string
  ) {
    super("rook", square, symbol, color, position, size);
  }

  private verticalAndHorizontal() {
    const m: Square[] = [];
    return m;
  }

  public combineMoves() {
    const moves = this.verticalAndHorizontal();

    this.availablesMoves = moves;

    return moves;
  }
}

Object.assign(Rook.prototype, rookMoves);
