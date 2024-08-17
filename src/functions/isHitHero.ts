import { IHero, IProjectile } from "@/types/types";

export const isHitHero = (projectile: IProjectile, hero: IHero): boolean => {
  const distance = Math.sqrt(
    Math.pow(projectile.x - hero.x, 2) + Math.pow(projectile.y - hero.y, 2)
  );
  return distance < 10 + hero.radius;
};
