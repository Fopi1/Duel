const mouseRadius = 5;

export const checkMouseCollision = (
  heroX: number,
  heroY: number,
  radius: number,
  mouseX: number,
  mouseY: number
): boolean => {
  const distanceToMouse = Math.sqrt(
    (heroX - mouseX) ** 2 + (heroY - mouseY) ** 2
  );
  return distanceToMouse <= radius + mouseRadius;
};
