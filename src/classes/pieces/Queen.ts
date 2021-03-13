import Piece from "./Piece";
import { file } from "../../interfaces/grid";
import Square from "../Square";

export default class Queen extends Piece {
  constructor(
    readonly color: "dark" | "white",
    readonly position: { file: file; rank: number },
    readonly size: number,
    readonly square: Square
  ) {
    super("queen", square, color, position, size);
  }
}
