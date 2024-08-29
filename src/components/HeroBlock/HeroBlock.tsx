import { FC, useContext } from "react";
import "./HeroBlock.scss";
import Slider from "@/components/Slider/Slider";
import { HeroSpeedContext } from "@/contexts/HeroSpeedContext";
import { ShootDelayContext } from "@/contexts/FiringDelayContext";
import { key } from "@/functions/key";

interface HeroBlockProps {
  color: string;
  hits: number;
  className?: string;
}

const HeroBlock: FC<HeroBlockProps> = ({ color, hits, className = "" }) => {
  const heroSpeedContext = useContext(HeroSpeedContext);
  const shootDelayContext = useContext(ShootDelayContext);
  if (!heroSpeedContext || !shootDelayContext) {
    throw new Error("Context error");
  }
  const { heroesSpeed, setHeroesSpeed } = heroSpeedContext;
  const { shootDelays, setShootDelays } = shootDelayContext;

  const getHeroParams = (isBlue: boolean) => {
    const speedKey = isBlue ? key(heroesSpeed, 0) : key(heroesSpeed, 1);
    const delayKey = isBlue ? key(shootDelays, 0) : key(shootDelays, 1);

    if (speedKey && delayKey) {
      return {
        heroSpeed: heroesSpeed[speedKey],
        heroShootDelay: shootDelays[delayKey],
        speedFieldName: speedKey,
        delayFieldName: delayKey,
      };
    } else {
      return null;
    }
  };

  const isColorBlue = color.toLowerCase() === "blue";

  const { heroSpeed, heroShootDelay, speedFieldName, delayFieldName } =
    getHeroParams(isColorBlue)!;

  const speedTitle = `Speed of ${color.toLowerCase()}`;
  const shootDelayTitle = `Shoot delay of ${color.toLowerCase()}`;
  return (
    <div className={`hero-block ${className}`}>
      <div className="stat">
        <h1 className="stats-description">Hits Got</h1>
        <h2 className="color" style={{ color: color }}>
          {color}
        </h2>
        <div className="points">{hits}</div>
      </div>
      <div className="hero-params">
        <Slider
          title={speedTitle}
          min={0}
          max={50}
          step={5}
          stateValue={heroSpeed}
          setState={setHeroesSpeed}
          fieldName={speedFieldName}
        />
        <Slider
          title={shootDelayTitle}
          min={0}
          max={500}
          step={50}
          stateValue={heroShootDelay}
          setState={setShootDelays}
          fieldName={delayFieldName}
        />
      </div>
    </div>
  );
};

export default HeroBlock;
