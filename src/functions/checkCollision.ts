import { checkMouseCollision } from "./checkMouseCollision";
import { checkWallsCollision } from "./checkWallsCollision";

export const checkCollision = (
  heroX: number,
  heroY: number,
  speed: number,
  radius: number,
  mouseX: number,
  mouseY: number,
  height: number
): boolean => {
  return (
    checkWallsCollision(heroY, speed, radius, height) ||
    checkMouseCollision(heroX, heroY, radius, mouseX, mouseY)
  );
};
