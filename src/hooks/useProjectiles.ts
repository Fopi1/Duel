import { useEffect } from "react";
import { random } from "../functions/random";
import { IHero, IProjectile } from "../types/types";
import { isHitHero } from "../functions/isHitHero";

export const useProjectiles = (
  width: number,
  height: number,
  hero1: IHero,
  hero2: IHero
) => {
  const shootTime = 100;
  const projectiles: IProjectile[] = [];
  const shootProjectile = (shooter: IHero, target: IHero) => {
    const angle = Math.atan2(target.y - shooter.y, target.x - shooter.x);
    const speed = 10;
    const offset = shooter.radius + 5;
    const projectile: IProjectile = {
      x: shooter.x + Math.cos(angle) * offset,
      y: shooter.y + Math.sin(angle) * offset,
      speedX: Math.cos(angle) * speed,
      speedY: Math.sin(angle) * speed,
      radius: 10,
      color: "black",
    };
    projectiles.push(projectile);
  };
  const randomShoot = () => {
    const shooter = random(0, 1) === 1 ? hero1 : hero2;
    const target = shooter === hero1 ? hero2 : hero1;
    shootProjectile(shooter, target);
    setTimeout(randomShoot, shootTime);
  };
  const moveProjectiles = () => {
    projectiles.forEach((projectile, index) => {
      projectile.x += projectile.speedX;
      projectile.y += projectile.speedY;

      if (
        projectile.x < 0 ||
        projectile.x > width ||
        projectile.y < 0 ||
        projectile.y > height ||
        isHitHero(projectile, hero1) ||
        isHitHero(projectile, hero2)
      ) {
        projectiles.splice(index, 1);
      }
    });
  };
  useEffect(() => {
    randomShoot();
  });

  return { projectiles, moveProjectiles };
};
