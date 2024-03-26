import React, { useState, useEffect } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Radar,
} from "recharts";
import { formatData } from "../Datas/formatDatas.js";
import { getPerformanceUserById } from "../Datas/api.js";

function Performance({ userId }) {
  const [performanceData, setPerformanceData] = useState([]);
  const [error, setError] = useState(null); // State pour gérer les erreurs

  // Récupération et mise à jour des données de l'API
  const fetchData = async () => {
    try {
      const response = await getPerformanceUserById(userId);
      setPerformanceData(response.data.data);
      setError(null); // Effacer les erreurs précédentes en cas de succès
    } catch (error) {
      setError("Une erreur s'est produite lors de la récupération des données");
    }
  };
  useEffect(() => {
    fetchData();
  }, [userId]);

  // Formatage des données
  const formatPerformanceData = formatData(performanceData, "performance");

  return (
    <div className="radarchart">
      <div className="performance">
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Afficher l'erreur si elle existe */}
        <ResponsiveContainer>
          <RadarChart data={formatPerformanceData}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="name"
              tick={{ fill: "#FFFFFF" }} // Couleur des noms
            />
            <PolarRadiusAxis axisLine={false} tick={false} />
            <Radar
              name="Performance"
              dataKey="value"
              stroke="#E60000"
              fill="#E60000"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Performance;
