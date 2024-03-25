
import React from 'react';
import Sider from "../components/sider";
import Title from "../components/title";
import Nutrition from '../components/nutrition';
import ActivityBarChart from '../components/activityBarchart';
import Average from '../components/average';
import Performance from '../components/performance';
import ScoreDay from '../components/scoreDay';

function Profil() {
  
  return (
    <div className="content">
        
     <div className="section-profil">
     <Title userId={12}/>
     <div className="content-grid">
        <div className="grid-1">
            
               
                <ActivityBarChart userId={12}/>
           
            <div className="activite-2">
                
                <Average userId={12}/>
                
                <Performance userId={12} />
                
                    <ScoreDay userId={12}/>
                
                
            </div>
        </div>
        
     <Nutrition userId={12} />
        
     </div>
     </div>
     <div className="section-sider">
     <Sider
        yogaUrl="/images/yoga.png"
        iconUrl="/images/icon.png"
        natationUrl="/images/natation.png"
        cyclismeUrl="/images/cyclisme.png"
        musculationUrl="/images/musculation.png"     
      />
     </div>
    </div>
  );
}

export default Profil;