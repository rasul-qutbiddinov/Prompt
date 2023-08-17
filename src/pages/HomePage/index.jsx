import React from "react";
import HeroHome from "../../container/HeroHome";
import FeaturesHome from "../../container/FeaturesHome";
import DemosHome from "../../container/DemosHome";

function HomePage() {
  return (
    <div>
      <HeroHome />
      <DemosHome />
      <FeaturesHome/>
    </div>
  );
}

export default HomePage;
