import React from "react";
import { useState, useEffect } from "react";
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

  //récupération et mise ajour des données de L'Api
  useEffect(() => {
    const loadAverageData = async () => {
      const response = await getPerformanceUserById(userId);
      setPerformanceData(response.data.data);
    };
    loadAverageData();
  }, [userId]);

  //formatage des données
  const formatPerformanceData = formatData(performanceData, "performance");

  return (
    <div className="radarchart">
      <div className="performance">
        <ResponsiveContainer>
          <RadarChart data={formatPerformanceData}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="name"
              tick={{ fill: "#FFFFFF" }} //couleur des names
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
