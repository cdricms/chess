import { file } from "../interfaces/grid";
import Square from "./Square";

export const LETTERS: file[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
const GRID_COLOR = [0, 1, 0, 1, 0, 1, 0, 1];

export const SQUARES: Square[] = [];

export let SHOW_COORDS = false;

const btnShowCoords = document.getElementById("coords")!;

btnShowCoords.onclick = () => (SHOW_COORDS = !SHOW_COORDS);

export default class Grid {
  grid: Square[][];

  constructor(public size: number) {
    // The multidimensional array
    this.grid = this.initGrid();
  }

  public show() {
    // Draws the squares
    SQUARES.forEach((square) => square.show());
  }

  private initGrid() {
    const grid = new Array(8);
    for (let rank = 0; rank < grid.length; rank++) grid[rank] = new Array(8);
    let index = 0;

    for (let rank = 0; rank < grid.length; rank++) {
      GRID_COLOR.reverse();
      for (let file = 0; file < grid[rank].length; file++) {
        const fileLetter = LETTERS[file];
        const color = GRID_COLOR[file] === 0 ? "black" : "white";

        const j = [7, 6, 5, 4, 3, 2, 1, 0];

        grid[rank][file] = new Square(
          color,
          { file: fileLetter, rank: j[rank] + 1, i: file, j: rank },
          this.size / 8,
          index
        );
        SQUARES.push(grid[rank][file]);
        index++;
      }
    }

    return grid;
  }
}
