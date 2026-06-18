"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { time: "00:00", actual: 9400, plan: 9800 },
  { time: "04:00", actual: 10500, plan: 10800 },
  { time: "08:00", actual: 11600, plan: 11200 },
  { time: "12:00", actual: 12100, plan: 11900 },
  { time: "16:00", actual: 12680, plan: 12400 },
  { time: "20:00", actual: 13200, plan: 13000 },
];

export function ProductionTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data}>
        <CartesianGrid stroke="#162033" strokeDasharray="3 3" />
        <XAxis dataKey="time" stroke="#64748B" fontSize={12} />
        <YAxis stroke="#64748B" fontSize={12} />
        <Tooltip
          contentStyle={{
            background: "#0B1220",
            border: "1px solid #162033",
            borderRadius: "8px",
            color: "#fff",
          }}
        />

        <Area
          type="monotone"
          dataKey="actual"
          stroke="#00D68F"
          fill="#00D68F22"
          strokeWidth={2}
        />

        <Area
          type="monotone"
          dataKey="plan"
          stroke="#3B82F6"
          fill="#3B82F611"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}