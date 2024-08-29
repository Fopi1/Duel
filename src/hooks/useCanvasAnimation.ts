import { useContext, useEffect } from "react";
import {
  drawGameBoard,
  drawHero,
  drawProjectile,
} from "@/functions/drawFunctions";
import { IHero, IProjectile, MousePosition } from "@/types/types";
import { checkCollision } from "@/functions/checkCollision";
import { checkHeroClick } from "@/functions/checkHeroClick";
import { ColorContext } from "@/contexts/ColorContext";
import { HeroClickContext } from "@/contexts/HeroClickContext";
import { HeroSpeedContext } from "@/contexts/HeroSpeedContext";

export const useCanvasAnimation = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  heroes: IHero[],
  moveProjectiles: () => void,
  removeProjectile: () => void,
  projectiles: IProjectile[],
  mousePosition: MousePosition
) => {
  const colorContext = useContext(ColorContext);
  const heroClickContext = useContext(HeroClickContext);
  const heroSpeedContext = useContext(HeroSpeedContext);

  if (!colorContext || !heroClickContext || !heroSpeedContext) {
    throw new Error("pizdec");
  }

  const { setIsHeroClicked } = heroClickContext;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;

    const handleMouseClick = () => {
      checkHeroClick(heroes, mousePosition, setIsHeroClicked);
    };
    canvas.addEventListener("mousedown", handleMouseClick);

    const animate = () => {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawGameBoard(context, canvas.width, canvas.height);

      heroes.forEach((hero) => {
        const isCollision = checkCollision(
          hero.x,
          hero.y,
          hero.speed,
          hero.radius,
          mousePosition.mouseX,
          mousePosition.mouseY,
          canvas.height
        );
        hero.speed = isCollision ? -hero.speed : hero.speed;
        hero.y += hero.speed;
        drawHero(context, hero.x, hero.y, hero.radius, hero.color);
      });

      projectiles.forEach((projectile) => {
        drawProjectile(context, projectile.x, projectile.y, projectile.color);
      });
      moveProjectiles();
      removeProjectile();
    };
    animate();
    return () => {
      cancelAnimationFrame(requestAnimationFrame(animate));
      canvas.removeEventListener("mousedown", handleMouseClick);
    };
  }, []);
};
