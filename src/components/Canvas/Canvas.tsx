import { forwardRef } from "react";
import { useCanvasAnimation } from "@/hooks/useCanvasAnimation";
import { useHeroes } from "@/hooks/useHeroes";
import { useProjectiles } from "@/hooks/useProjectiles";
import { MousePosition } from "@/types/types";

interface CanvasProps {
  mousePosition: MousePosition;
  ref: React.RefObject<HTMLCanvasElement>;
}
const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(
  ({ mousePosition }, ref) => {
    const width = 1366;
    const height = 768;

    const heroes = useHeroes(2, width, height);

    const { projectiles, moveProjectiles, removeProjectile } = useProjectiles(
      width,
      height,
      heroes
    );
    useCanvasAnimation(
      ref as React.RefObject<HTMLCanvasElement>,
      heroes,
      moveProjectiles,
      removeProjectile,
      projectiles,
      mousePosition
    );

    return <canvas ref={ref} width={width} height={height} />;
  }
);

export default Canvas;
