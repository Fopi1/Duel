import { IHeroClick, IProjectileColor } from "@/types/context";

export const changeProjectileColor = (
  projectileColor: IProjectileColor,
  color: string,
  isHeroClicked: IHeroClick
) => {
  return {
    hero1ProjectileColor: isHeroClicked.hero1Click
      ? color
      : projectileColor.hero1ProjectileColor,
    hero2ProjectileColor: isHeroClicked.hero2Click
      ? color
      : projectileColor.hero2ProjectileColor,
  };
};
