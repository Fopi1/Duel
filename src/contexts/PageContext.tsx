import { FC } from "react";
import ColorProvider from "./ColorContext";
import HeroHitProvider from "./HeroHitContext";
import HeroClickProvider from "./HeroClickContext";
import HeroSpeedProvider from "./HeroSpeedContext";
import FiringFrequencyProvider from "./FiringDelayContext";

interface PageProviderProps {
  children: React.ReactNode;
}

const PageProvider: FC<PageProviderProps> = ({ children }) => {
  return (
    <ColorProvider>
      <HeroClickProvider>
        <HeroHitProvider>
          <HeroSpeedProvider>
            <FiringFrequencyProvider>{children}</FiringFrequencyProvider>
          </HeroSpeedProvider>
        </HeroHitProvider>
      </HeroClickProvider>
    </ColorProvider>
  );
};

export default PageProvider;
