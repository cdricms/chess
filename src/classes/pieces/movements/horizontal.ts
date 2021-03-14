import { grid } from "../../../sketch";
import Piece from "../Piece";

export default function horizontal(piece: Piece, sign: number) {
  const sq = [];
  for (let i = 1; i < 9; i++) {
    const rank = grid.grid[piece.position!.rank!];
    if (rank === undefined) break;
    const square = rank[piece.position!.fileNumber! + sign * i];
    if (square === undefined) break;
    if (square.piece) {
      if (square.piece!.color === piece.color || square.piece!.type === "king")
        break;
      else {
        sq.push(square);
        break;
      }
    }

    sq.push(square);
  }
  return sq;
}
