import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { formatData } from "../Datas/formatDatas.js";
import { getActivityUserById } from "../Datas/api.js";

function ActivityBarChart({ userId }) {
  const [activityData, setActivityData] = useState([]);

  const formatActivityData = formatData(activityData, "activity");

  // Récupérer les données de l'Api
  useEffect(() => {
    const loadActivityData = async () => {
      const response = await getActivityUserById(userId);
      setActivityData(response.data.sessions);
    };
    loadActivityData();
  }, [userId]);

  return (
    <div className="barchart">
      <div className="title-activity">
        <h4>Activité quotidienne</h4>
        <span>
          <i className="poids"></i>
          <p>Poids (kg)</p>
          <i></i>
          <p>Calories brûlées (kCal)</p>
        </span>
      </div>
      <div className="activity">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={formatActivityData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="id"
              tickLine={false} // Supprime la ligne de graduation
            />
            <YAxis
              dataKey="kilogram"
              orientation="right"
              yAxisId="right"
              domain={["dataMin-1", "dataMax +1"]}
              tickLine={false}
              axisLine={false}
            />
            <YAxis dataKey="calories" hide orientation="left" yAxisId="left" />

            <Tooltip />
            <Bar
              dataKey="kilogram"
              yAxisId="right"
              fill="#282D30"
              name=" "
              barSize={7}
              radius={[3.5, 3.5, 0, 0]}
            />
            <Bar
              dataKey="calories"
              yAxisId="left"
              fill="#E60000"
              name=" "
              barSize={7}
              radius={[3.5, 3.5, 0, 0]}
            ></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ActivityBarChart;
