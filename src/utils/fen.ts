import { LETTERS } from "../classes/Grid";
import Bishop from "../classes/pieces/Bishop";
import King from "../classes/pieces/King";
import Knight from "../classes/pieces/Knight";
import Pawn from "../classes/pieces/Pawn";
import { pieces } from "../classes/pieces/Piece";
import Queen from "../classes/pieces/Queen";
import Rook from "../classes/pieces/Rook";
import Square from "../classes/Square";

// Inspired and copied from Sebastian Lague: https://youtu.be/U4ogK0MIzqk?t=151

export default class FEN {
  constructor(private size: number) {}

  private currentFen =
    "rnbqkbnr/pppppppp/8/3n3/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

  private fenBoard = this.getFenBoard();

  readonly move = this.fen.split(" ")[1];
  readonly permissions = this.fen.split(" ")[2];
  readonly enPassant = this.fen.split(" ")[3];
  readonly halfMoveClock = this.fen.split(" ")[4];
  readonly fullMove = this.fen.split(" ")[5];

  readonly pieceTypeFromSymbol = new Map<
    string,
    | typeof King
    | typeof Queen
    | typeof Knight
    | typeof Pawn
    | typeof Rook
    | typeof Bishop
  >([
    ["k", King],
    ["q", Queen],
    ["n", Knight],
    ["p", Pawn],
    ["r", Rook],
    ["b", Bishop]
  ]);

  get fen() {
    return this.currentFen;
  }

  set fen(fen: string) {
    this.currentFen = fen;
    this.fenBoard = this.getFenBoard();
    // this.move = fen.split(" ")[1];
  }

  private getFenBoard() {
    return this.currentFen.split(" ")[0];
  }

  // Creates the pieces at the right squares based on the FEN
  public load(squares: Square[]) {
    // The FEN is read from left to right and from top to bottom (like reading a book), meaning from A8 to H1
    // The Board itself has to be created in that same order, left to right from the top

    let file = 0,
      rank = 7;
    let t = 0;

    // This iterates through the fen board, meaning the part with slashes
    for (let symbol of this.fenBoard) {
      // If one of the character is a slash it means that we go to the next row (rank)
      if (symbol === "/") {
        file = 0;
        rank--;
        t++;
      } else {
        // If the character is digit, we sum the file with the digit represented
        // When a digit appears, it means that there are no pieces on n (digit) squares
        if (parseInt(symbol)) {
          file += parseInt(symbol);
        } else {
          // If there is piece
          // We check if the piece is black or white based on the case of the letter
          // (If Upper case: White; if lower case: black)
          const pieceColor = symbol === symbol.toUpperCase() ? "white" : "dark";
          // We check also what type of piece it is based on letter, see the map above.
          const Piece = this.pieceTypeFromSymbol.get(symbol.toLowerCase())!;
          // We create the piece at the right square
          // The first iterations, if initial position:
          // t (0) * 8 + file (0) = 0
          // t (0) * 8 + file (1) = 1
          // Until the next slash...
          // t (1) * 8 + file (0) = 8
          // t (1) * 8 + file (1) = 9
          // ...
          const square = squares[t * 8 + file];
          const piece = new Piece(
            pieceColor,
            { file: LETTERS[file], rank: rank + 1 },
            this.size,
            square
          );
          square.piece = piece;
          pieces.push(piece);
          file++;
        }
      }
    }
  }

  public updateFen(squares: Square[]) {
    console.log(squares);
  }
}
