const alerts = [
  { title: "EX120 Hydraulic Hose", severity: "Critical", time: "18 min ago" },
  { title: "HDT95-03 Final Drive", severity: "High", time: "35 min ago" },
  { title: "Fuel Usage Anomaly", severity: "Medium", time: "1 hr ago" },
];

export function CriticalAlertsPanel() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-white">Critical Alerts</h3>

      {alerts.map((alert) => (
        <div
          key={alert.title}
          className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 p-3"
        >
          <div>
            <p className="text-sm font-medium">{alert.title}</p>
            <p className="text-xs text-slate-400">{alert.time}</p>
          </div>

          <span className="rounded bg-red-500/15 px-2 py-1 text-xs text-red-400">
            {alert.severity}
          </span>
        </div>
      ))}
    </div>
  );
}