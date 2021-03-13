import p5 from "p5";

export type pieceType =
  | "queen"
  | "king"
  | "rook"
  | "knight"
  | "bishop"
  | "pawn";

export interface image {
  piece: pieceType;
  image: p5.Image;
  path: string;
}
