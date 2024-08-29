import { createContext, FC, useState } from "react";
import { ShootDelayContextType } from "@/types/context";

export const ShootDelayContext = createContext<ShootDelayContextType | null>(
  null
);

const ShootDelayProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [shootDelays, setShootDelays] = useState({
    hero1ShootDelay: 100,
    hero2ShootDelay: 100,
  });
  return (
    <ShootDelayContext.Provider value={{ shootDelays, setShootDelays }}>
      {children}
    </ShootDelayContext.Provider>
  );
};

export default ShootDelayProvider;
