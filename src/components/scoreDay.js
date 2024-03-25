import React, { useEffect, useState } from "react";
import {
  RadialBar,
  RadialBarChart,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { getUserById } from "../Datas/api.js";

function ScoreDay({ userId }) {
  const [todayScore, setTodayScore] = useState({ todayScore: 0 }); // Initialise avec un score de 0

  // Calcul du pourcentage
  const fetchData = async () => {
    const res = await getUserById(userId);
    setTodayScore(res.data.todayScore * 100);
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  const data = [{ name: "score", value: todayScore + "%", fill: "#FF0000" }];

  // const outerRadius = `${percentage}%`; // Réglage en fonction du pourcentage

  return (
    <div className="box-score">
      <p className={"score"}>
        <strong>{data[0].value}</strong>de votre <br />
        objectif
      </p>
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
