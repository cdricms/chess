import Piece from "./Piece";
import { file } from "../../interfaces/grid";
import Square from "../Square";

export default class Rook extends Piece {
  constructor(
    readonly color: "dark" | "white",
    readonly position: { file: file; rank: number },
    readonly size: number,
    readonly square: Square
  ) {
    super("rook", square, color, position, size);
  }
}
