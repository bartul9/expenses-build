import React from "react";
import { observer } from "mobx-react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartTemplate = observer(({ chartData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={200}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 15,
        }}
      >
        <CartesianGrid color="blue" strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Balance" fill="#2195f3a8" />
        <Bar dataKey="Expense cost" fill="#d9544f98" />
      </BarChart>
    </ResponsiveContainer>)
})

export default ChartTemplate;
