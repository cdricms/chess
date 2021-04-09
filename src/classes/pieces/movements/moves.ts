import Piece from "../Piece";
import diagonalMove from "./diagonal";
import horizontal from "./horizontal";
import vertical from "./vertical";

function verticalAndHorizontal(this: Piece) {
  const m = [];

  const vertical1 = vertical(this, -1);
  const vertical2 = vertical(this, 1);

  const horizontal1 = horizontal(this, -1);
  const horizontal2 = horizontal(this, 1);

  m.push(...vertical1, ...vertical2, ...horizontal1, ...horizontal2);

  return m;
}

export const bishopMoves = {
  diagonal: diagonalMove
};

export const queenMoves = {
  diagonal: diagonalMove,
  verticalAndHorizontal
};

export const rookMoves = {
  verticalAndHorizontal
};
