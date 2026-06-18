import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Gauge,
  ShieldAlert,
  Timer,
  Truck,
} from "lucide-react";

type KpiCardProps = {
  title: string;
  value: string | number;
  unit?: string;
  change?: number;
};

const icons: Record<string, React.ElementType> = {
  Production: Truck,
  Availability: ShieldAlert,
  Utilization: Gauge,
  Downtime: Timer,
  "AI Risk": Gauge,
  Alerts: AlertTriangle,
};

export function KpiCard({ title, value, unit, change }: KpiCardProps) {
  const positive = (change ?? 0) >= 0;
  const Icon = icons[title] ?? Gauge;

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">{title}</p>

        <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
          <Icon size={17} />
        </div>
      </div>

      <div className="mt-4 flex items-end gap-2">
        <div className="text-3xl font-bold tracking-tight text-white">
          {value}
        </div>

        {unit && <div className="pb-1 text-sm text-slate-400">{unit}</div>}
      </div>

      {change !== undefined && (
        <div
          className={[
            "mt-3 flex items-center gap-1 text-xs font-medium",
            positive ? "text-emerald-400" : "text-red-400",
          ].join(" ")}
        >
          {positive ? <ArrowUp size={13} /> : <ArrowDown size={13} />}
          {positive ? "+" : ""}
          {change}%
          <span className="text-slate-500">vs yesterday</span>
        </div>
      )}

      <div className="mt-4 h-8 rounded bg-gradient-to-r from-emerald-500/10 to-emerald-500/0" />
    </div>
  );
}