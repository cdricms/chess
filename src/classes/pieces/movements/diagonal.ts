import { grid } from "../../../sketch";
import Piece from "../Piece";

export default function diagonalMove(this: Piece) {
  const m = [];

  function initDiagonals(piece: Piece, signColumn: number, signRow: number) {
    const sq = [];

    for (let tL = 1; tL < 9; tL++) {
      const rank = grid.grid[piece.drawingCoords.j + signColumn * tL];
      if (!rank) break;
      const square = rank[piece.drawingCoords.i + signRow * tL];
      if (!square) break;
      if (square.piece) {
        if (square.piece!.color === piece.color || square.piece.type === "king")
          break;
        else {
          m.push(square);
          sq.push(square);
          break;
        }
      }
      m.push(square);
      sq.push(square);
    }
    return sq;
  }

  const topLeft = initDiagonals(this, -1, -1);
  const topRight = initDiagonals(this, 1, -1);
  const bottomRight = initDiagonals(this, 1, 1);
  const bottomLeft = initDiagonals(this, -1, 1);

  return { topLeft, topRight, bottomRight, bottomLeft };
}
