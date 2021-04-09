import GridCoordinates from "../interfaces/grid";
import { SHOW_COORDS } from "./Grid";
import { p5 } from "../sketch";
import Piece from "./pieces/Piece";

export let SHOW_CHECK = false;

const btnShowCheck = document.getElementById("check")!;

btnShowCheck.onclick = () => (SHOW_CHECK = !SHOW_CHECK);
export default class Square {
  piece: Piece | null;
  highlight: boolean;

  constructor(
    public color: "black" | "white",
    public coords: GridCoordinates,
    public size: number,
    readonly index: number
  ) {
    // The right coordinates, so the square can be drawn at the right spot
    this.piece = null;
    this.highlight = false;
  }

  public showCheck() {
    if (SHOW_CHECK && this.piece) {
      if (
        this.piece.position!.file === this.coords.file &&
        this.piece.position!.rank === this.coords.rank
      ) {
        p5.push();
        p5.fill(0, 255, 0);
        p5.textSize(25);
        p5.text(
          "V",
          this.coords.i * this.size + this.size / 2,
          this.coords.j * this.size + this.size / 2
        );
        p5.pop();
      } else {
        p5.push();
        p5.fill(255, 0, 0);
        p5.textSize(25);
        p5.text(
          "X",
          this.coords.i * this.size + this.size / 2,
          this.coords.j * this.size + this.size / 2
        );

        p5.pop();
      }
    }
  }

  public show() {
    // Draws the Square at the right place
    p5.push();
    if (this.color === "black") p5.fill(0, 0, 0);
    else p5.fill(255, 255, 255);
    p5.noStroke();
    p5.rect(
      this.coords.i * this.size,
      this.coords.j * this.size,
      this.size,
      this.size
    );
    p5.pop();

    if (this.highlight) {
      p5.push();
      p5.fill(255, 69, 0, 120);
      p5.noStroke();
      p5.rect(
        this.coords.i * this.size,
        this.coords.j * this.size,
        this.size,
        this.size
      );

      p5.pop();
    }

    // Shows the coordinates, based on boolean
    if (SHOW_COORDS) {
      p5.push();

      if (this.color === "black") p5.fill(255, 255, 255);
      else p5.fill(0, 0, 0);
      p5.text(
        `${this.coords.file}${this.coords.rank}`,
        this.coords.i * this.size + this.size / 2,
        this.coords.j * this.size + this.size / 2
      );

      p5.pop();
    }

    // Shows some coordinates
    p5.push();
    if (this.color === "black") p5.fill(255, 255, 255);
    else p5.fill(0, 0, 0);
    p5.textSize(15);

    if (this.coords.file === "A" && this.coords.rank !== 1) {
      p5.textAlign(p5.LEFT, p5.BOTTOM);
      p5.text(
        this.coords.rank,
        this.coords.i * this.size,
        this.coords.j * this.size + this.size
      );
    } else if (this.coords.rank === 1 && this.coords.file !== "A") {
      p5.textAlign(p5.LEFT, p5.BOTTOM);
      p5.text(
        this.coords.file,
        this.coords.i * this.size,
        this.coords.j * this.size + this.size
      );
    } else if (this.coords.rank === 1 && this.coords.file === "A") {
      p5.textAlign(p5.LEFT, p5.BOTTOM);
      p5.text(
        `${this.coords.file}${this.coords.rank}`,
        this.coords.i * this.size,
        this.coords.j * this.size + this.size
      );
    }
    p5.pop();
  }
}
