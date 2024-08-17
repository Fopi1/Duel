import { random } from "@/functions/random";

export const useHero = (
  isHeroFirst: boolean,
  width: number,
  height: number,
  color: string
) => {
  const radius = 50;
  const y = random(0 + radius * 2, height - radius * 2);
  const x = isHeroFirst
    ? random(0 + radius, width / 2 - 200)
    : random(width / 2 + 200, width - radius);
  const speed = random(1, 10);
  return {
    y: y,
    x: x,
    speed: speed,
    radius: radius,
    color: color,
  };
};
