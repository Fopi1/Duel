import { random } from "@/functions/random";
import { IHero } from "@/types/types";
import { useContext, useEffect, useRef } from "react";
import { HeroSpeedContext } from "@/contexts/HeroSpeedContext";

export const useHeroes = (quantity: number, width: number, height: number) => {
  const heroSpeedContext = useContext(HeroSpeedContext);
  if (!heroSpeedContext) {
    throw new Error("SYKA");
  }
  const { heroesSpeed } = heroSpeedContext;
  const radius = 50;
  const heroesRef = useRef<IHero[]>([]);
  const heroes = heroesRef.current;
  const createHero = (id: number) => {
    const hero = {
      id,
      x:
        id === 0
          ? random(radius, width / 2 - 200)
          : random(width / 2 + 200, width - radius),
      y: random(radius * 2, height - radius * 2),
      speed: id === 0 ? heroesSpeed.hero1Speed : heroesSpeed.hero2Speed,
      radius: radius,
      color: id === 0 ? "blue" : "red",
    };
    return hero;
  };
  const deployHero = () => {
    for (let i = 0; i < quantity; i++) {
      const hero = createHero(i);
      heroes.push(hero);
    }
  };
  const changeHeroSpeed = () => {
    heroes.map((hero) => {
      const tempHeroSpeed =
        hero.id === 0 ? heroesSpeed.hero1Speed : heroesSpeed.hero2Speed;
      const finalHeroSpeed =
        0 + hero.speed > 0 ? tempHeroSpeed : -tempHeroSpeed;
      hero.speed = finalHeroSpeed;
    });
  };
  useEffect(() => {
    deployHero();
  }, []);

  useEffect(() => {
    changeHeroSpeed();
  }, [heroesSpeed]);
  return heroes;
};
