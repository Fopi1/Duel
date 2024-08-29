import { createContext, FC, useState } from "react";
import { HeroHitContextType } from "@/types/context";

export const HeroHitContext = createContext<HeroHitContextType | null>(null);

const HeroHitProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [heroesHits, setHeroesHits] = useState({
    hero1Hit: 0,
    hero2Hit: 0,
  });
  return (
    <HeroHitContext.Provider value={{ heroesHits, setHeroesHits }}>
      {children}
    </HeroHitContext.Provider>
  );
};

export default HeroHitProvider;
