import { FC, useRef } from "react";
import { useCanvasAnimation } from "../hooks/useCanvasAnimation";
import { useCreateHero } from "../hooks/useCreateHero";
import { useProjectiles } from "../hooks/useProjectiles";

const Canvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const width = 1366;
  const height = 768;
  const hero1 = useCreateHero(true, width, height);
  const hero2 = useCreateHero(false, width, height);

  const { projectiles, moveProjectiles } = useProjectiles(
    width,
    height,
    hero1,
    hero2
  );

  useCanvasAnimation(canvasRef, hero1, hero2, projectiles, moveProjectiles);

  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};

export default Canvas;
