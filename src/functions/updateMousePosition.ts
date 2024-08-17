interface MousePosition {
  mouseX: number;
  mouseY: number;
}

export const updateMousePosition = (
  event: MouseEvent,
  mousePosition: MousePosition,
  canvas: HTMLCanvasElement
) => {
  const rect = canvas.getBoundingClientRect();
  mousePosition.mouseX = event.clientX - rect.left;
  mousePosition.mouseY = event.clientY - rect.top;
};
