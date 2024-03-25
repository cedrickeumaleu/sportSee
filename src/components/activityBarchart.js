import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { formatData } from "../Datas/formatDatas.js";
import { getActivityUserById } from "../Datas/api.js";

const CustomToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={"tooltip"}>
        <p>{`${payload[0].value}${
          payload[0].name === "kilogram" ? "kg" : "Kcal"
        }`}</p>
        <p>{`${payload[1].value}${
          payload[1].name === "kilogram" ? "kg" : "Kcal"
        }`}</p>
      </div>
    );
  }
};

const CustomLegend = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className={"legend"}>
        <span>Activité journalière</span>
        <ul>
          {payload.map((entry, index) => (
            <li key={`item-${index}`}>
              {entry.value === "kilogram"
                ? "Poids (kg)"
                : "Calories brulées (kCal)"}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

function ActivityBarChart({ userId }) {
  const [activityData, setActivityData] = useState([]);

  const fetchData = async () => {
    const res = await getActivityUserById(userId);
    setActivityData(res.data.sessions);
  };
  useEffect(() => {
    fetchData();
  }, [userId]);

  //formatage des donées
  const formatActivityData = formatData(activityData, "activity");

  return (
    <div className="barchart">
      <div className="title-activity">
        <h4>Activité quotidienne</h4>
        <span>
          <i className="poids"></i>
          <p>Poids (kg)</p>
          <i className="color-kg"></i>
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

            <Tooltip content={<CustomToolTip />} />
            <Legend
              content={<CustomLegend />}
              verticalAlign="top"
              height={100}
            />
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
