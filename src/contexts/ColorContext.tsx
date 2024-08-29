import React, { createContext, FC, useState } from "react";
import { ColorContextType } from "@/types/context";

export const ColorContext = createContext<ColorContextType | null>(null);

const ColorProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projectileColor, setProjectileColors] = useState({
    hero1ProjectileColor: "purple",
    hero2ProjectileColor: "green",
  });
  return (
    <ColorContext.Provider value={{ projectileColor, setProjectileColors }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
