export const checkWallsCollision = (
  heroY: number,
  speed: number,
  radius: number,
  canvasHeight: number
): number => {
  if (heroY + speed > canvasHeight - radius || heroY + speed < radius) {
    return -speed;
  }
  return speed;
};
