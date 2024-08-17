import { useEffect, useRef } from "react";

export const useMousePosition = (
  canvasRef: React.RefObject<HTMLCanvasElement>
) => {
  const mousePosition = useRef({ mouseX: 0, mouseY: 0 });

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        mousePosition.current.mouseX = event.clientX - rect.left;
        mousePosition.current.mouseY = event.clientY - rect.top;
      }
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, [canvasRef, mousePosition]);

  return mousePosition;
};
