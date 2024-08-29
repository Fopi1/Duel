import { useContext } from "react";
import "./Table.scss";
import { HeroHitContext } from "/src/contexts/HeroHitContext";
import HeroBlock from "@/components/HeroBlock/HeroBlock";

const Table = () => {
  const heroHitContext = useContext(HeroHitContext);

  if (!heroHitContext) {
    throw new Error("HeroHitContext");
  }
  const { heroesHits } = heroHitContext;

  return (
    <div className="point-table">
      <div className="point-table__inner">
        <div className="stats">
          <HeroBlock color={"Blue"} hits={heroesHits.hero1Hit} />
          <HeroBlock
            className={"flip"}
            color={"Red"}
            hits={heroesHits.hero2Hit}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
