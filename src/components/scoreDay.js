import React, { useEffect, useState } from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

import { getUserById } from "../Datas/api.js";

function ScoreDay({ userId }) {
  const [todayScore, setTodayScore] = useState(0); // Initialise avec un score de 0
  const [error, setError] = useState(null); // State pour gérer les erreurs

  // Récupération des données utilisateur
  const fetchData = async () => {
    try {
      const res = await getUserById(userId);
      // La réponse contient déjà le pourcentage, pas besoin de multiplier par 100
      setTodayScore(res.data.todayScore);
    } catch (error) {
      setError("Erreur lors de la récupération du score :");
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  // Données pour le graphique radial
  const data = [{ name: "score", value: todayScore, fill: "#FF0000" }];

  return (
    <div className="box-score">
      <p className="title-score">Score</p>

      <p className={"score"}>
        <strong>{todayScore}%</strong> de votre <br />
        objectif
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ResponsiveContainer height={250} width="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="80%"
          data={data}
          startAngle={90}
          endAngle={180}
          cx="50%"
          cy="50%"
        >
          <RadialBar dataKey="value" cornerRadius={10} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScoreDay;
