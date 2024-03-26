import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Dot,
  ResponsiveContainer,
} from "recharts";
import { formatData } from "../Datas/formatDatas.js";
import { getAverageUserById } from "../Datas/api.js";

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={"tooltip"}>
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
};

function Average({ userId }) {
  const [averageData, setAverageData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [error, setError] = useState(null); // State pour gérer les erreurs

  // Récupération et mise à jour des données
  const fetchData = async () => {
    try {
      const response = await getAverageUserById(userId);
      setAverageData(response.data.sessions);
      setError(null); // Effacer les erreurs précédentes en cas de succès
    } catch (error) {
      setError("Une erreur s'est produite lors de la récupération des données");
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  // Formatage des données
  const formatAverageData = formatData(averageData, "averageSessions");

  return (
    <div className="linechart">
      <div className="linechart-title">
        <p>Durée moyenne des sessions</p>
      </div>
      <div className="linechart-section">
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Afficher l'erreur si elle existe */}
        <ResponsiveContainer>
          <LineChart data={formatAverageData}>
            <XAxis
              dataKey="day"
              tick={{ fill: "#FFFFFF" }} // Couleur des labels
              tickLine={false} // Supprime la ligne de graduation
              axisLine={false} // Supprime la ligne de l'axe
            />
            <YAxis hide />
            <Tooltip content={<CustomToolTip />} />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#FFFFFF"
              name=" "
              dot={(data, index) => (activeIndex === index ? <Dot /> : null)}
              onMouseEnter={(data, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Average;
