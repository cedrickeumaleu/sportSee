import React, { useEffect, useState } from "react";
import { getUserById } from "../Datas/api.js";
import { USER_MAIN_DATA } from "../Datas/data.js";

function Nutrition({ userId }) {
  //   const user = userData.find((user) => user.id === userId);
  const [keyData, setKeyData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let data = [];

      // Condition pour décider quelle méthode utiliser pour récupérer les données
      if (userId) {
        const response = await getUserById(userId);
        // Vérifier si response est défini et s'il contient la propriété data
        if (response && response.data) {
          data = response.data.keyData;
        }
      } else {
        data = USER_MAIN_DATA.keyData;
      }

      setKeyData(data);
    };

    fetchData();
  }, [userId]);
  return (
    <div className="grid-2">
      <div className="col">
        <img className="img-icon" src="/images/calories-icon.png" alt="" />
        <div className="content-icon">
          {/* Affichage des calories */}
          <h2>{keyData.calorieCount}KCall</h2>
          <p>Calories</p>
        </div>
      </div>
      <div className="col">
        <img className="img-icon" src="/images/protein-icon.png" alt="" />
        <div className="content-icon">
          {/* Affichage des protéines */}
          <h2>{keyData.proteinCount}g</h2>
          <p>Proteines</p>
        </div>
      </div>
      <div className="col">
        <img className="img-icon" src="/images/carbs-icon.png" alt="" />
        <div className="content-icon">
          {/* Affichage des glucides */}
          <h2>{keyData.carbohydrateCount}g</h2>
          <p>Glucides</p>
        </div>
      </div>
      <div className="col">
        <img className="img-icon" src="/images/fat-icon.png" alt="" />
        <div className="content-icon">
          {/* Affichage des lipides */}
          <h2>{keyData.lipidCount}g</h2>
          <p>Lipides</p>
        </div>
      </div>
    </div>
  );
}
export default Nutrition;
