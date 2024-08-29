import { createContext, FC, useState } from "react";
import { HeroClickContextType } from "@/types/context";

export const HeroClickContext = createContext<HeroClickContextType | null>(
  null
);
const HeroClickProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHeroClicked, setIsHeroClicked] = useState({
    hero1Click: false,
    hero2Click: false,
  });
  return (
    <HeroClickContext.Provider value={{ isHeroClicked, setIsHeroClicked }}>
      {children}
    </HeroClickContext.Provider>
  );
};

export default HeroClickProvider;
