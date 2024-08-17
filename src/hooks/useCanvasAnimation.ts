import { useEffect } from "react";
import {
  drawGameBoard,
  drawHero,
  drawProjectile,
} from "@/functions/drawFunctions";
import { checkWallsCollision } from "@/functions/checkWallsCollision";
import { IHero, IProjectile } from "@/types/types";
import { updateMousePosition } from "@/functions/updateMousePosition";
import { checkMouseCollision } from "@/functions/checkMouseCollision";

export const useCanvasAnimation = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  heroes: IHero[],
  projectiles: IProjectile[],
  moveProjectiles: () => void
) => {
  const mousePosition = { mouseX: 0, mouseY: 0 };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;

    const handleMouseMove = (event: MouseEvent) => {
      updateMousePosition(event, mousePosition, canvas);
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawGameBoard(context, canvas.width, canvas.height);

      heroes.forEach((hero: IHero) => {
        hero.speed = checkWallsCollision(
          hero.y,
          hero.speed,
          hero.radius,
          canvas.height
        );
        hero.speed = checkMouseCollision(
          hero.x,
          hero.y,
          mousePosition.mouseX,
          mousePosition.mouseY,
          hero.speed,
          hero.radius
        );
        hero.y += hero.speed;
        drawHero(context, hero.x, hero.y, hero.radius, hero.color);
      });

      projectiles.forEach((projectile) => {
        drawProjectile(context, projectile.x, projectile.y);
      });
      moveProjectiles();
    };
    animate();
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};
