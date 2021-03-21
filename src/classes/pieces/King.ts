import Piece from "./Piece";
import { file } from "../../interfaces/grid";
import Square from "../Square";
import { grid } from "../../sketch";
import { SQUARES } from "../Grid";

export default class King extends Piece {
  constructor(
    readonly color: "black" | "white",
    readonly position: { file: file; rank: number },
    readonly size: number,
    readonly square: Square,
    readonly symbol: string
  ) {
    super("king", square, symbol, color, position, size);
  }

  private moves() {
    const moves: Square[] = [];
    const file = this.square.coords.i;
    const rank = this.square.coords.j;
    const g = grid.grid;

    for (let j = -1; j <= 1; j++) {
      for (let i = -1; i <= 1; i++) {
        if (
          rank + j > -1 &&
          rank + j < g.length &&
          file + i > -1 &&
          file + i < g[file].length
        ) {
          let square = g[rank + j][file + i];
          if (!(i === 0 && j === 0)) {
            if (
              square.piece?.color !== this.color &&
              square.piece?.type !== "king"
            )
              moves.push(square);
          }
        }
      }
    }
    return moves;
  }

  public combineMoves() {
    const moves = this.moves();
    this.availableMoves = moves;
    return moves;
  }
}
