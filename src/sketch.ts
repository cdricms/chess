import P5 from "p5";
import { SQUARES } from "./classes/Grid";
import Grid from "./classes/Grid";
import Square from "./classes/Square";
import { pieceType, image } from "./interfaces/pieces";
import FEN from "./utils/fen";
import { pieces, pieceSelected } from "./classes/pieces/Piece";

export const blackPieces: {
  images: image[];
} = {
  images: []
};

export const whitePieces: {
  images: image[];
} = {
  images: []
};

export let grid: Grid;
const sketch = (p5: P5) => {
  const SIZE = 900;

  let fen: FEN;

  p5.preload = () => {
    const pieces: pieceType[] = [
      "bishop",
      "king",
      "knight",
      "pawn",
      "queen",
      "rook"
    ];

    for (let i = 0; i < 12; i++) {
      if (i <= 5) {
        const path = `./assets/pieces/black/${pieces[i]}_black.png`;
        blackPieces.images.push({
          image: p5.loadImage(path),
          path,
          piece: pieces[i]
        });
      } else {
        let piece = i - 6;

        const path = `./assets/pieces/white/${pieces[piece]}_white.png`;

        whitePieces.images.push({
          image: p5.loadImage(path),
          path,
          piece: pieces[piece]
        });
      }
    }
  };

  p5.setup = () => {
    const canvas = p5.createCanvas(SIZE, SIZE);
    canvas.parent("sketch");
    p5.background(255, 255, 255);

    grid = new Grid(SIZE);
    console.log(grid);

    fen = new FEN(SIZE / 8);

    fen.load(SQUARES);

    // fen.updateFen(SQUARES);

    // console.log(grid);

    pieces.forEach((piece) => piece.combineMoves());

    console.log(SQUARES);
  };

  p5.draw = () => {
    grid.show();
    SQUARES.forEach((square: Square) => {
      square.piece?.show();
      square.showCheck();
    });
  };

  p5.mousePressed = () => {
    if (pieceSelected) pieceSelected.clickOnSquare(p5.mouseX, p5.mouseY, fen);
    pieces.forEach((piece) => {
      piece.clickedOn(p5.mouseX, p5.mouseY);
    });
  };
};

export const p5 = new P5(sketch);
