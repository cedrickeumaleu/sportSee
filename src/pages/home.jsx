import React from "react";
import Sider from "../components/sider";
function Home() {
 

  return (
    <div className="sider">
      <Sider
        yogaUrl="/images/yoga.png"
        iconUrl="/images/icon.png"
        natationUrl="/images/natation.png"
        cyclismeUrl="/images/cyclisme.png"
        musculationUrl="/images/musculation.png"
       
      />
     
    </div>
  );
}

export default Home;