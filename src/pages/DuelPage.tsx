import { useContext, useEffect, useRef, useState } from "react";
import Canvas from "@/components/Canvas/Canvas";
import Menu from "@/components/Menu/Menu";
import Table from "@/components/Table/Table";
import "./DuelPage.scss";
import { HeroClickContext } from "@/contexts/HeroClickContext";
import { useMousePosition } from "@/hooks/useMousePosition";

const DuelPage = () => {
  const heroClickContext = useContext(HeroClickContext);
  if (!heroClickContext) {
    throw new Error("Error App");
  }
  const { isHeroClicked } = heroClickContext;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { mousePosition } = useMousePosition(canvasRef);

  const [menuPosition, setMenuPosition] = useState({
    top: mousePosition.mouseX,
    left: mousePosition.mouseY,
  });

  useEffect(() => {
    setMenuPosition({
      top: mousePosition.mouseY,
      left: mousePosition.mouseX,
    });
  }, [isHeroClicked]);
  return (
    <div className="duel-page">
      <Table />
      <div className="canvas-wrapper">
        {isHeroClicked.hero1Click || isHeroClicked.hero2Click ? (
          <Menu style={{ top: menuPosition?.top, left: menuPosition?.left }} />
        ) : null}
        <Canvas mousePosition={mousePosition} ref={canvasRef} />
      </div>
    </div>
  );
};

export default DuelPage;
