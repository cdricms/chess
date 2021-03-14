import p5 from "p5";
import { LETTERS } from "../Grid";
import { file } from "../../interfaces/grid";
import { image, pieceType } from "../../interfaces/pieces";
import { blackPieces, whitePieces } from "../../sketch";
import { p5 as pF } from "../../sketch";
import Square from "../Square";

let pieceSelected: null | Piece = null;
export const pieces: Piece[] = [];

export default class Piece {
  drawingCoords: { i: number; j: number };
  image: p5.Image;
  history: { file: file; rank: number }[];
  availablesMoves: Square[];

  constructor(
    readonly type: pieceType,
    readonly square: Square,
    readonly color?: "black" | "white",
    readonly position?: { file: file; rank: number; fileNumber?: number },
    readonly size?: number
  ) {
    this.drawingCoords = this.getDrawingCoords();
    this.image = this.getImage();
    this.history = [this.position!];
    this.availablesMoves = [];
    this.position!.fileNumber = this.getFileNumber();
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

      if (this.availablesMoves.length > 0) {
        pF.push();
        pF.noStroke();
        this.availablesMoves.forEach((square) => {
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

  private hitbox(mousex: number, mousey: number) {
    return (
      mousex > this.square.coords.i * this.square.size &&
      mousex < this.square.coords.i * this.square.size! + this.square.size &&
      mousey > this.square.coords.j * this.square.size! &&
      mousey < this.square.coords.j * this.square.size! + this.square.size
    );
  }

  public combineMoves() {
    return [] as Square[];
  }

  public clickedOn(mousex: number, mousey: number) {
    const hb = this.hitbox(mousex, mousey);

    if (hb) {
      pieceSelected = this;
      console.log(this);
    } else {
      if (pieceSelected === this) pieceSelected = null;
    }
  }
}
