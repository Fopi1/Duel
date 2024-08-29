import { Dispatch, SetStateAction, useContext, useEffect, useRef } from "react";
import { IHero, IProjectile } from "@/types/types";
import { HeroHitContext } from "@/contexts/HeroHitContext";
import { ColorContext } from "@/contexts/ColorContext";
import { IHeroHit } from "@/types/context";
import { ShootDelayContext } from "@/contexts/FiringDelayContext";

export const useProjectiles = (
  width: number,
  height: number,
  heroes: IHero[]
) => {
  const heroHitContext = useContext(HeroHitContext);
  const colorContext = useContext(ColorContext);
  const shootDelayContext = useContext(ShootDelayContext);
  if (!heroHitContext || !colorContext || !shootDelayContext) {
    throw new Error("ORA");
  }
  const { setHeroesHits } = heroHitContext;
  const { projectileColor } = colorContext;
  const { shootDelays } = shootDelayContext;

  const { hero1ProjectileColor, hero2ProjectileColor } = projectileColor;

  const projectilesRef = useRef<IProjectile[]>([]);
  const projectiles = projectilesRef.current;

  const createProjectile = (
    shooter: IHero,
    angle: number,
    speed: number,
    offset: number
  ) => {
    return {
      x: shooter.x + Math.cos(angle) * offset,
      y: shooter.y + Math.sin(angle) * offset,
      speedX: Math.cos(angle) * speed,
      speedY: Math.sin(angle) * speed,
      color: shooter.id === 0 ? hero1ProjectileColor : hero2ProjectileColor,
      shooter: shooter,
    };
  };
  const shootProjectile = (shooter: IHero, target: IHero) => {
    const angle = Math.atan2(target.y - shooter.y, target.x - shooter.x);
    const speed = 10;
    const offset = shooter.radius + 5;
    const projectile = createProjectile(shooter, angle, speed, offset);
    projectiles.push(projectile);
  };
  const hero1Shoot = () => {
    shootProjectile(heroes[0], heroes[1]);
  };
  const hero2Shoot = () => {
    shootProjectile(heroes[1], heroes[0]);
  };
  const moveProjectiles = () => {
    projectiles.forEach((projectile) => {
      projectile.x += projectile.speedX;
      projectile.y += projectile.speedY;
    });
  };
  const removeProjectile = () => {
    projectiles.forEach((projectile, index) => {
      if (
        projectile.x < 0 ||
        projectile.x > width ||
        projectile.y < 0 ||
        projectile.y > height ||
        isHitHero(projectile, setHeroesHits) ||
        isHitHero(projectile, setHeroesHits)
      ) {
        projectiles.splice(index, 1);
      }
    });
  };
  const isHitHero = (
    projectile: IProjectile,
    setHeroesHits: Dispatch<SetStateAction<IHeroHit>>
  ): boolean => {
    return heroes.some((hero) => {
      const distance = Math.sqrt(
        Math.pow(projectile.x - hero.x, 2) + Math.pow(projectile.y - hero.y, 2)
      );
      const hit = distance < hero.radius;
      if (hit) {
        setHeroesHits((prev) => ({
          ...prev,
          hero1Hit: hero.id === 0 ? prev.hero1Hit + 1 : prev.hero1Hit,
          hero2Hit: hero.id === 1 ? prev.hero2Hit + 1 : prev.hero2Hit,
        }));
      }
      return hit;
    });
  };
  useEffect(() => {
    const hero1Timer = setInterval(hero1Shoot, shootDelays.hero1ShootDelay);
    const hero2Timer = setInterval(hero2Shoot, shootDelays.hero2ShootDelay);

    return () => {
      clearInterval(hero1Timer);
      clearInterval(hero2Timer);
    };
  }, [projectileColor, heroes, shootDelays]);

  return { projectiles, moveProjectiles, removeProjectile };
};
