const recommendations = [
  {
    priority: "High",
    title: "Optimize truck dispatch routes in South Pit",
    impact: "$48,500",
    confidence: "92%",
    eta: "2 hrs",
  },
  {
    priority: "High",
    title: "Address EX120 hydraulic pressure issue",
    impact: "$18,000",
    confidence: "90%",
    eta: "3 hrs",
  },
  {
    priority: "Medium",
    title: "Adjust fuel burn rate threshold for HDT95-03",
    impact: "$12,300",
    confidence: "86%",
    eta: "4 hrs",
  },
  {
    priority: "Low",
    title: "Review tire pressure for TR-56 and TR-57",
    impact: "$6,200",
    confidence: "78%",
    eta: "6 hrs",
  },
];

const priorityClass: Record<string, string> = {
  High: "bg-red-500/15 text-red-400",
  Medium: "bg-yellow-500/15 text-yellow-400",
  Low: "bg-emerald-500/15 text-emerald-400",
};

export function RecommendationPanel() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">
          AI Recommended Actions
        </h3>
        <button className="text-xs text-emerald-400">View all</button>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Recommendation</th>
              <th className="px-4 py-3">Impact</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">ETA</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800">
            {recommendations.map((item) => (
              <tr key={item.title} className="bg-slate-950">
                <td className="px-4 py-3">
                  <span
                    className={[
                      "rounded px-2 py-1 text-[10px] font-semibold",
                      priorityClass[item.priority],
                    ].join(" ")}
                  >
                    {item.priority}
                  </span>
                </td>

                <td className="px-4 py-3 text-white">{item.title}</td>
                <td className="px-4 py-3 text-emerald-400">{item.impact}</td>
                <td className="px-4 py-3 text-slate-300">{item.confidence}</td>
                <td className="px-4 py-3 text-slate-400">{item.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}