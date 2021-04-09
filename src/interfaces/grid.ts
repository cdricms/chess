export type coords = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type file = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
export type rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export default interface GridCoordinates {
  i: number;
  j: number;
  file: file;
  rank: number;
}
