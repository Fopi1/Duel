import { Dispatch, SetStateAction } from "react";
import { IHero, MousePosition } from "@/types/types";
import { checkMouseCollision } from "./checkMouseCollision";
import { IHeroClick } from "@/types/context";

export const checkHeroClick = (
  heroes: IHero[],
  mousePosition: MousePosition,
  setIsHeroClicked: Dispatch<SetStateAction<IHeroClick>>
) => {
  const { mouseX, mouseY } = mousePosition;
  const clicks = heroes.map((hero) =>
    checkMouseCollision(hero.x, hero.y, hero.radius, mouseX, mouseY)
  );
  setIsHeroClicked({
    hero1Click: clicks[0] || false,
    hero2Click: clicks[1] || false,
  });
};
