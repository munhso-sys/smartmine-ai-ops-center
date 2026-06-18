"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Healthy", value: 62, color: "#00D68F" },
  { name: "At Risk", value: 38, color: "#FFB020" },
  { name: "Critical", value: 23, color: "#FF5A5F" },
];

export function FleetHealthChart() {
  return (
    <div className="relative h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={55}
            outerRadius={90}
            paddingAngle={2}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              background: "#0B1220",
              border: "1px solid #162033",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xs text-slate-400">Total</div>
          <div className="text-2xl font-bold text-white">123</div>
          <div className="text-xs text-slate-500">Equipment</div>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: item.color }}
            />
            <span className="text-slate-400">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}