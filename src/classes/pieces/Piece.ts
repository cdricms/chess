import p5 from "p5";
import { LETTERS, SQUARES } from "../Grid";
import { file } from "../../interfaces/grid";
import { image, pieceType } from "../../interfaces/pieces";
import { blackPieces, whitePieces } from "../../sketch";
import { p5 as pF } from "../../sketch";
import Square from "../Square";
import FEN from "../../utils/fen";
import Pawn from "./Pawn";
import King from "./King";

export let pieceSelected: null | Piece = null;
export let pieces: Piece[] = [];
export let LAST_MOVES: Square[] = [];

export default class Piece {
  drawingCoords: { i: number; j: number };
  image: p5.Image;
  history: { file: file; rank: number }[];
  availableMoves: Square[];

  constructor(
    readonly type: pieceType,
    public square: Square,
    readonly symbol: string,
    readonly color?: "black" | "white",
    readonly position?: { file: file; rank: number; fileNumber?: number },
    readonly size?: number
  ) {
    this.drawingCoords = this.getDrawingCoords();
    this.image = this.getImage();
    this.availableMoves = [];
    this.position!.fileNumber = this.getFileNumber();
    this.history = [{ ...this.position! }];
  }

  private getFileNumber() {
    return LETTERS.findIndex((letter) => letter === this.position!.file);
  }

  public show() {
    if (pieceSelected === this) {
      pF.push();
      pF.noStroke();
      pF.fill(0, 200, 0, 150);
      pF.rect(
        this.square.coords.i * this.square.size,
        this.square.coords.j * this.square.size,
        this.square.size,
        this.square.size
      );
      pF.pop();

      if (this.availableMoves.length > 0) {
        pF.push();
        pF.noStroke();
        this.availableMoves.forEach((square) => {
          pF.fill(255, 255, 0, 150);
          if (square.piece && square.piece.color !== this.color) {
            pF.fill(255, 0, 0, 150);
          }
          pF.rect(
            square.coords.i * square.size,
            square.coords.j * square.size,
            square.size,
            square.size
          );
        });

        pF.pop();
      }
    }

    pF.push();

    pF.image(
      this.image,
      this.drawingCoords.i * this.size! + this.size! / 6,
      this.drawingCoords.j * this.size! + this.size! / 6,
      this.size! / 1.5,
      this.size! / 1.5
    );

    pF.pop();
  }

  private getDrawingCoords() {
    const rankInverted = [7, 6, 5, 4, 3, 2, 1, 0];
    const i = LETTERS.findIndex((letter) => letter === this.position!.file);
    const j = rankInverted[this.position!.rank - 1];

    return { i, j };
  }

  public getPossibleMoves(moves: Square[]) {
    const possibleMoves = [];

    for (let move of moves) {
      if (!move.piece) possibleMoves.push(move);
      else {
        if (move.piece.color !== this.color && move.piece.type !== "king")
          possibleMoves.push(move);
      }
    }

    return possibleMoves;
  }

  private getImage() {
    const color: { images: image[] } =
      this.color === "black" ? blackPieces : whitePieces;

    return color.images.find((image: image) => image.piece === this.type)!
      .image;
  }

  private hitbox(mousex: number, mousey: number, square: Square) {
    return (
      mousex > square.coords.i * square.size &&
      mousex < square.coords.i * square.size! + square.size &&
      mousey > square.coords.j * square.size! &&
      mousey < square.coords.j * square.size! + square.size
    );
  }

  public combineMoves() {
    return [] as Square[];
  }

  public clickedOn(mousex: number, mousey: number) {
    const hb = this.hitbox(mousex, mousey, this.square);

    if (hb) {
      if (
        !(
          pieceSelected &&
          pieceSelected.availableMoves.find((square) => square === this.square)
        )
      )
        pieceSelected = this;
    }
  }

  public clickOnSquare(mousex: number, mousey: number, fen: FEN) {
    let newSquare: Square | null = null;

    // If there are moves available, assigning the move as the new square
    if (this.availableMoves.length > 0) {
      for (let move of this.availableMoves) {
        const hb = this.hitbox(mousex, mousey, move);

        if (hb) newSquare = move;
      }
    }

    let enPassant: typeof Pawn.prototype.canEatOnEnPassant[0] | null = null;

    if (newSquare) {
      if (this.type === "pawn") {
        const toEat = ((this as unknown) as Pawn).canEatOnEnPassant.find(
          (item) => item.eatOnSquare === newSquare
        );
        if (toEat) {
          pieces = pieces.filter((piece) => piece !== toEat.pieceToEat);
          toEat.pieceToEat.square.piece = null;
          enPassant = toEat;
        }
      }
      if (newSquare.piece) {
        pieces = pieces.filter((piece) => piece !== newSquare!.piece);
      }
      this.changeSquare(newSquare, fen, enPassant);
    }
  }

  public changeSquare(
    newSquare: Square,
    fen: FEN,
    enPassant: typeof Pawn.prototype.canEatOnEnPassant[0] | null
  ) {
    // Set the old square to the actual square
    const oldSquare = this.square;

    // Updating the fen board
    const fenBoard = fen.updateFenBoard(newSquare, this);

    // Adding the remainings to the fen board, to have a complete fen
    const newFen = fen.addRemains(fenBoard);

    // Setting the fen to the new one
    fen.fen = newFen;

    if (this.type === "king") {
      const king = (this as unknown) as King;
      if (
        king.permissionMoves.length > 0 &&
        king.permissionMoves.find((square) => square === newSquare)
      ) {
        if (king.square.index - newSquare.index === 2) {
          const rookSquare = SQUARES[king.square.index - 4];
          const rooksNewSquare = SQUARES[rookSquare.index + 3];
          rookSquare.piece!.changeSquare(rooksNewSquare, fen, null);
        } else if (king.square.index - newSquare.index === -2) {
          const rookSquare = SQUARES[king.square.index + 3];
          const rooksNewSquare = SQUARES[rookSquare.index - 2];
          rookSquare.piece!.changeSquare(rooksNewSquare, fen, null);
        }
      }
    }

    // If enPassant move is made, update the fen
    if (enPassant) {
      const fenBoard = fen.updateFenBoard(enPassant.eatOnSquare, null, {
        square: "0",
        i: enPassant.pieceToEat.drawingCoords.i,
        j: enPassant.pieceToEat.drawingCoords.j
      });
      const newFen = fen.addRemains(fenBoard);
      fen.fen = newFen;
    }

    // Updating the properties of the piece
    this.drawingCoords = { i: newSquare.coords.i, j: newSquare.coords.j };
    this.position!.file = newSquare.coords.file;
    this.position!.rank = newSquare.coords.rank;
    this.position!.fileNumber = this.getFileNumber();

    this.square = newSquare;
    this.square.piece = this;
    oldSquare.piece = null;
    //
    LAST_MOVES = [oldSquare, newSquare];
    this.history.push({ ...this.position! });

    pieces.forEach((piece) => {
      piece.combineMoves();
    });

    // Updating for the enPassant string
    let enPassantString = "-";

    // Getting the only pawn that has an en passant move
    const rightPawn = pieces.find(
      (piece) =>
        piece.type === "pawn" && (piece as Pawn).enPassantString !== "-"
    );

    // If found update enPassantString to the right square
    if (rightPawn) {
      enPassantString = (rightPawn as Pawn).enPassantString;
    }

    // Updating the fen with en passant
    const fenEnPassant = fen.addRemains(fen.fen.split(" ")[0], enPassantString);
    fen.fen = fenEnPassant;

    pieceSelected = null;

    document.getElementById("fen")!.innerHTML = "FEN: " + fen.fen;

    fen.fenHistory.push(fen.fen);
  }
}
