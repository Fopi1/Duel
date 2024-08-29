export interface IHero {
  id: number;
  x: number;
  y: number;
  speed: number;
  radius: number;
  color: string;
}
export interface IHeroes {
  hero1: IHero;
  hero2: IHero;
}
export interface IProjectile {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  color: string;
  shooter: IHero;
}
export interface MousePosition {
  mouseX: number;
  mouseY: number;
}
