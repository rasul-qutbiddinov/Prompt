import React from 'react'
import HeroApp from '../../container/HeroApp'
import FeatureApp from '../../container/FeaturesApp';
import WorkApp from '../../container/WorkApp';
import TeamApp from '../../container/TeamApp';

function AppPage() {
  return (
    <div>
      <HeroApp />
      <FeatureApp />
      <WorkApp/>
      <TeamApp/>
    </div>
  );
}

export default AppPage;