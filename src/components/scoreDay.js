import React from "react";
import {
  RadialBar,
  RadialBarChart,
  Legend,
  ResponsiveContainer,
} from "recharts";
import userData from "../Datas/data.js";

function ScoreDay({ userId }) {
  const user = userData.find((user) => user.id === userId);
  const percentage = user.todayScore * 100; // Calcul du pourcentage

  const data = [
    {
      name: "Score",
      score: percentage,
    },
  ];

  const outerRadius = `${percentage}%`; // Réglage en fonction du pourcentage

  return (
    <div className="score">
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius="90%"
          outerRadius={outerRadius}
          data={data}
          startAngle={90}
          endAngle={-270}
          barSize={15}
          fill="#E60000"
          background={{ fill: "#f5f5f5" }}
          clockWise
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="score"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScoreDay;
