import Piece from "./Piece";
import { file } from "../../interfaces/grid";
import Square from "../Square";
import { grid } from "../../sketch";

export default class King extends Piece {
  permissionMoves: Square[] = [];
  constructor(
    readonly color: "black" | "white",
    readonly position: { file: file; rank: number },
    readonly size: number,
    readonly square: Square,
    readonly symbol: string
  ) {
    super("king", square, symbol, color, position, size);
    this.permissionMoves = [];
  }

  private permissions() {
    const moves: Square[] = [];

    if (
      this.history.length === 1 &&
      this.position.file === "E" &&
      (this.position.rank === 1 || this.position.rank === 8)
    ) {
      const kingSide =
        grid.grid[this.drawingCoords.j][this.drawingCoords.i + 3]?.piece;
      const queenSide =
        grid.grid[this.drawingCoords.j][this.drawingCoords.i - 4]?.piece;

      const emptyRightSide = [];
      const emptyLeftSide = [];

      for (let i = 1; i < 3; i++) {
        let rightSide =
          grid.grid[this.drawingCoords.j][this.drawingCoords.i + i];

        if (rightSide.piece) break;

        emptyRightSide.push(rightSide);
      }

      for (let i = 1; i < 4; i++) {
        let leftSide =
          grid.grid[this.drawingCoords.j][this.drawingCoords.i - i];

        if (leftSide.piece) break;

        emptyLeftSide.push(leftSide);
      }

      if (emptyLeftSide.length === 3 && queenSide?.history.length === 1)
        moves.push(grid.grid[this.drawingCoords.j][this.drawingCoords.i - 2]);
      if (emptyRightSide.length === 2 && kingSide?.history.length === 1)
        moves.push(grid.grid[this.drawingCoords.j][this.drawingCoords.i + 2]);
    }

    return moves;
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
    this.permissionMoves = this.permissions();
    this.availableMoves = [...moves, ...this.permissionMoves];
    return moves;
  }
}
