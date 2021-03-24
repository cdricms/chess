import { LETTERS, SQUARES } from "../classes/Grid";
import Bishop from "../classes/pieces/Bishop";
import King from "../classes/pieces/King";
import Knight from "../classes/pieces/Knight";
import Pawn from "../classes/pieces/Pawn";
import Piece, { pieces } from "../classes/pieces/Piece";
import Queen from "../classes/pieces/Queen";
import Rook from "../classes/pieces/Rook";
import Square from "../classes/Square";

export default class FEN {
  constructor(private size: number) {}

  private currentFen =
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
  // "rnbqkbnr/8/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
  // "b6b/8/8/8/r2nq3/2k5/8/B6B w KQkq - 0 1";
  // "b6b/8/6q1/8/r2n4/2k5/8/B6B w KQkq - 0 1";

  private fenBoard = this.getFenBoard();

  public fenHistory: string[] = [this.currentFen];

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
  }

  private getFenBoard() {
    return this.currentFen.split(" ")[0];
  }

  // Inspired and copied from Sebastian Lague: https://youtu.be/U4ogK0MIzqk?t=151
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
          const pieceColor =
            symbol === symbol.toUpperCase() ? "white" : "black";
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
            square,
            symbol
          );
          square.piece = piece;
          pieces.push(piece);
          file++;
        }
      }
    }
  }

  private transFenBoardToZeros(fenBoard: string[]) {
    let translatedFen = fenBoard;

    for (let sliceIndex = 0; sliceIndex < translatedFen.length; sliceIndex++) {
      const slice = translatedFen[sliceIndex];
      let newSlice = "";
      for (let char = 0; char < slice.length; char++) {
        if (parseInt(slice[char])) {
          const num = parseInt(slice[char]);
          let stringOf0 = "";
          for (let a = 0; a < num; a++) stringOf0 += "0";

          newSlice += stringOf0;
        } else {
          newSlice += slice[char];
        }
      }
      translatedFen[sliceIndex] = newSlice;
    }

    return translatedFen;
  }

  private transFenBoard(newFen: string[]) {
    let result = newFen;
    for (let sliceIndex = 0; sliceIndex < newFen.length; sliceIndex++) {
      let count = 0;
      const slice = newFen[sliceIndex];
      let newSlice = "";
      for (let char = 0; char < slice.length; char++) {
        if (slice[char] === "0") count++;
        else {
          if (count > 0) newSlice += count;
          newSlice += slice[char];
          count = 0;
        }
      }
      if (count > 0) newSlice += count;
      result[sliceIndex] = newSlice;
    }

    return result;
  }

  public updateFenBoard(
    newSquare: Square,
    piece: Piece | null,
    none: { square: "0"; i: number; j: number } | null = null
  ) {
    let transFen = this.transFenBoardToZeros(this.fenBoard.split("/"));
    if (piece && !none) {
      let fenPieceRank = transFen[piece.drawingCoords.j];
      fenPieceRank =
        fenPieceRank.substring(0, piece.drawingCoords.i) +
        "0" +
        fenPieceRank.substring(piece.drawingCoords.i + 1);
      transFen[piece.drawingCoords.j] = fenPieceRank;

      let newSquareRank = transFen[newSquare.coords.j];
      newSquareRank =
        newSquareRank.substring(0, newSquare.coords.i) +
        piece.symbol +
        newSquareRank.substring(newSquare.coords.i + 1);
      transFen[newSquare.coords.j] = newSquareRank;
    } else {
      let fenPieceRank = transFen[none!.j];
      fenPieceRank =
        fenPieceRank.substring(0, none!.i) +
        "0" +
        fenPieceRank.substring(none!.i + 1);
      transFen[none!.j] = fenPieceRank;
    }

    transFen = this.transFenBoard(transFen);

    return transFen.join("/");
  }

  public addRemains(fenBoard: string, enPassant: string = "-") {
    return `${fenBoard} ${this.move} ${this.permissions} ${enPassant} ${this.halfMoveClock} ${this.fullMove}`;
  }
}
