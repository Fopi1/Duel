import { useEffect, useRef } from "react";

export const useMousePosition = (
  canvasRef: React.RefObject<HTMLCanvasElement>
) => {
  const mousePositionRef = useRef({ mouseX: 0, mouseY: 0 });
  const mousePosition = mousePositionRef.current;
  const updateMousePosition = (event: MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mousePosition.mouseX = event.clientX - rect.left;
      mousePosition.mouseY = event.clientY - rect.top;
    }
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, [canvasRef]);
  return { mousePosition };
};
