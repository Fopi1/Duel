import { createContext, FC, useState } from "react";
import { HeroSpeedContextType } from "@/types/context";

export const HeroSpeedContext = createContext<HeroSpeedContextType | null>(
  null
);

const HeroSpeedProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [heroesSpeed, setHeroesSpeed] = useState({
    hero1Speed: 10,
    hero2Speed: 10,
  });
  return (
    <HeroSpeedContext.Provider value={{ heroesSpeed, setHeroesSpeed }}>
      {children}
    </HeroSpeedContext.Provider>
  );
};

export default HeroSpeedProvider;
