import { FC, useRef } from "react";
import { useCanvasAnimation } from "@/hooks/useCanvasAnimation";
import { useHero } from "@/hooks/useHero";
import { useProjectiles } from "@/hooks/useProjectiles";
import { IHero } from "@/types/types";

const Canvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const width = 1366;
  const height = 768;
  const hero1: IHero = useHero(true, width, height, "blue");
  const hero2: IHero = useHero(false, width, height, "red");
  const heroes: IHero[] = [hero1, hero2];

  const { projectiles, moveProjectiles } = useProjectiles(
    width,
    height,
    heroes
  );

  useCanvasAnimation(canvasRef, heroes, projectiles, moveProjectiles);

  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};

export default Canvas;
