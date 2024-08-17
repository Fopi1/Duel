export const checkCollision = (
  heroY: number,
  heroX: number,
  mouseY: number,
  mouseX: number,
  speed: number,
  canvasHeight: number,
  radius: number,
  mouseRadius: number = 5,
  boundaryThickness: number = 5
): number => {
  if (heroY + speed > canvasHeight - radius || heroY + speed < 0 + radius) {
    return -speed;
  }
  const distanceToMouse = Math.sqrt(
    (heroX - mouseX) ** 2 + (heroY - mouseY) ** 2
  );
  if (
    distanceToMouse >= radius - boundaryThickness &&
    distanceToMouse <= radius + mouseRadius
  ) {
    return -speed;
  }
  return speed;
};
