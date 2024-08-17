export const drawGameBoard = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  context.fillStyle = "grey";
  context.fillRect(0, 0, width, height);
};

export const drawHero = (
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color: string
) => {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
};

export const drawProjectile = (
  context: CanvasRenderingContext2D,
  x: number,
  y: number
) => {
  context.beginPath();
  context.arc(x, y, 10, 0, 2 * Math.PI, false);
  context.fillStyle = "black";
  context.fill();
};
