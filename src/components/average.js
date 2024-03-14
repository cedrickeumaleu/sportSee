import { useState, useEffect } from "react";
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

function Average({ userId }) {
  const [averageData, setAverageData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  //récupération et mise ajour des données
  useEffect(() => {
    const loadAverageData = async () => {
      const response = await getAverageUserById(userId);
      setAverageData(response.data.sessions);
    };
    loadAverageData();
  }, [userId]);

  //formatage des données
  const formatAverageData = formatData(averageData, "averageSessions");

  return (
    <div className="linechart">
      <div className="linechart-title">
        <p>Durée moyenne des sessions</p>
      </div>
      <div className="linechart-section">
        <ResponsiveContainer>
          <LineChart data={formatAverageData}>
            <XAxis
              dataKey="day"
              tick={{ fill: "#FFFFFF" }} // Couleur des labels
              tickLine={false} // Supprime la ligne de graduation
              axisLine={false} // Supprime la ligne de l'axe
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{ fontSize: "12px", width: "30px", height: "10px" }} // Dimensions de la Tooltip réduites
              formatter={(value) => `${value} min`} // Formatage du texte
            />
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
