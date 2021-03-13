import Piece from "./Piece";
import { file } from "../../interfaces/grid";
import Square from "../Square";

export default class Bishop extends Piece {
  constructor(
    readonly color: "dark" | "white",
    readonly position: { file: file; rank: number },
    readonly size: number,
    readonly square: Square
  ) {
    super("bishop", square, color, position, size);
  }
}
