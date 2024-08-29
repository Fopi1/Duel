export const checkWallsCollision = (
  heroY: number,
  speed: number,
  radius: number,
  canvasHeight: number
): boolean => {
  return heroY + speed > canvasHeight - radius || heroY + speed < radius;
};
