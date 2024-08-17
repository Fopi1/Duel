import { random } from "../functions/random";

export const useCreateHero = (
  isHeroFirst: boolean,
  width: number,
  height: number
) => {
  const radius = 50;
  const y = random(0 + radius * 2, height - radius * 2);
  let x;
  if (isHeroFirst) {
    x = random(0 + radius, width / 2 - 200);
  } else {
    x = random(width / 2 + 200, width - radius);
  }
  const speed = random(1, 10);
  return {
    y: y,
    x: x,
    speed: speed,
    radius: radius,
  };
};
