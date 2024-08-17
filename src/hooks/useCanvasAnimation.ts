import { useEffect } from "react";
import { drawGameBoard, drawHero } from "@/functions/drawFunctions";
import { checkCollision } from "../functions/checkCollision";
import { IHero, IProjectile } from "../types/types";
import { updateMousePosition } from "../functions/updateMousePosition";

export const useCanvasAnimation = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  hero1: IHero,
  hero2: IHero,
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
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawGameBoard(context, canvas.width, canvas.height);
      hero1.speed = checkCollision(
        hero1.y,
        hero1.x,
        mousePosition.mouseY,
        mousePosition.mouseX,
        hero1.speed,
        canvas.height,
        hero1.radius
      );
      hero2.speed = checkCollision(
        hero2.y,
        hero2.x,
        mousePosition.mouseY,
        mousePosition.mouseX,
        hero2.speed,
        canvas.height,
        hero2.radius
      );
      hero1.y += hero1.speed;
      hero2.y += hero2.speed;

      drawHero(context, hero1.x, hero1.y, hero1.radius, "blue");
      drawHero(context, hero2.x, hero2.y, hero2.radius, "red");

      requestAnimationFrame(animate);
      projectiles.forEach((projectile) => {
        drawHero(
          context,
          projectile.x,
          projectile.y,
          projectile.radius,
          projectile.color
        );
      });
      moveProjectiles();
    };
    animate();
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestAnimationFrame(animate));
    };
  }, [canvasRef, hero1, hero2, projectiles, moveProjectiles, mousePosition]);
};
