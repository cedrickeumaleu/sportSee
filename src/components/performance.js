import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Radar,
} from "recharts";
import userData from "../Datas/data.js";

function Performance({ userId }) {
  const user = userData.find((user) => user.id === userId);
  const data = [
    { name: "Intensité", value: user.performance.intensity },
    { name: "Vitesse", value: user.performance.speed },
    { name: "Force", value: user.performance.strength },
    { name: "Endurance", value: user.performance.endurance },
    { name: "Energie", value: user.performance.energy },
    { name: "Cardio", value: user.performance.cardio },
  ];

  return (
    <div className="radarchart">
      <div className="performance">
        <ResponsiveContainer>
          <RadarChart data={data}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="name"
              tick={{ fill: "#FFFFFF" }} //couleur des names
            />
            <PolarRadiusAxis />
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
