import React, { useEffect, useState } from "react";
import { getUserById } from "../Datas/api.js";

function Nutrition({ userId }) {
  //   const user = userData.find((user) => user.id === userId);
  const [keyData, setKeyData] = useState({});

  // Récupération des données nutritionnelles
  //   const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
  //     keyData;

  useEffect(() => {
    const loadInfoData = async () => {
      const response = await getUserById(userId);
      setKeyData(response.data.keyData);
    };
    loadInfoData();
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
