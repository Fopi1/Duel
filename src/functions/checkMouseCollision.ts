export const checkMouseCollision = (
  heroX: number,
  heroY: number,
  mouseX: number,
  mouseY: number,
  speed: number,
  radius: number,
  mouseRadius: number = 5
) => {
  const distanceToMouse = Math.sqrt(
    (heroX - mouseX) ** 2 + (heroY - mouseY) ** 2
  );
  if (distanceToMouse <= radius + mouseRadius) {
    return -speed;
  }
  return speed;
};
