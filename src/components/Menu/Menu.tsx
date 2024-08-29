import { FC, useContext } from "react";
import "./Menu.scss";
import { changeProjectileColor } from "@/functions/changeProjectileColor";
import { ColorContext } from "@/contexts/ColorContext";
import { HeroClickContext } from "@/contexts/HeroClickContext";

interface MenuProps {
  style: React.CSSProperties;
}

const Menu: FC<MenuProps> = ({ style }) => {
  const colorContext = useContext(ColorContext);
  const heroClickContext = useContext(HeroClickContext);
  if (!colorContext || !heroClickContext) {
    throw new Error("Ebat");
  }
  const { projectileColor, setProjectileColors } = colorContext;
  const { isHeroClicked } = heroClickContext;

  const colors = ["purple", "green", "white"];

  return (
    <div style={style} className="menu">
      {colors.map((color) => (
        <button
          key={color}
          className="color-picker"
          onClick={() =>
            setProjectileColors(
              changeProjectileColor(projectileColor, color, isHeroClicked)
            )
          }
        >
          {color.title()}
        </button>
      ))}
    </div>
  );
};

export default Menu;
