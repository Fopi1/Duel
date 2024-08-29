import { Dispatch, SetStateAction } from "react";
// Context interfaces
export interface ColorContextType {
  projectileColor: IProjectileColor;
  setProjectileColors: Dispatch<SetStateAction<IProjectileColor>>;
}
export interface HeroClickContextType {
  isHeroClicked: IHeroClick;
  setIsHeroClicked: Dispatch<SetStateAction<IHeroClick>>;
}
export interface HeroHitContextType {
  heroesHits: IHeroHit;
  setHeroesHits: Dispatch<SetStateAction<IHeroHit>>;
}
export interface HeroSpeedContextType {
  heroesSpeed: IHeroSpeed;
  setHeroesSpeed: Dispatch<SetStateAction<IHeroSpeed>>;
}
export interface ShootDelayContextType {
  shootDelays: IShootDelay;
  setShootDelays: Dispatch<SetStateAction<IShootDelay>>;
}
// Value interfaces
export interface IProjectileColor {
  hero1ProjectileColor: string;
  hero2ProjectileColor: string;
}
export interface IHeroClick {
  hero1Click: boolean;
  hero2Click: boolean;
}
export interface IHeroHit {
  hero1Hit: number;
  hero2Hit: number;
}
export interface IHeroSpeed {
  hero1Speed: number;
  hero2Speed: number;
}
export interface IShootDelay {
  hero1ShootDelay: number;
  hero2ShootDelay: number;
}
