import Piece from "./Piece";
import { file } from "../../interfaces/grid";
import Square from "../Square";
import { bishopMoves } from "./movements/moves";

export default class Bishop extends Piece {
  constructor(
    readonly color: "black" | "white",
    readonly position: { file: file; rank: number },
    readonly size: number,
    readonly square: Square,
    readonly symbol: string
  ) {
    super("bishop", square, symbol, color, position, size);
  }

  private diagonal() {
    const topLeft: Square[] = [];
    const topRight: Square[] = [];
    const bottomRight: Square[] = [];
    const bottomLeft: Square[] = [];

    return { topLeft, topRight, bottomLeft, bottomRight };
  }

  public combineMoves() {
    const { topLeft, topRight, bottomLeft, bottomRight } = this.diagonal();

    const moves = [...topLeft, ...topRight, ...bottomLeft, ...bottomRight];

    this.availableMoves = moves;

    return moves;
  }
}

Object.assign(Bishop.prototype, bishopMoves);
