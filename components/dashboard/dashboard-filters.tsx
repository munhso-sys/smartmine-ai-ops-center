import { Calendar, Factory, Layers } from "lucide-react";

export function DashboardFilters() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
      <button className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white">
        <Factory size={15} />
        Site: Khandgait
      </button>

      <button className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white">
        <Layers size={15} />
        Shift: Day Shift
      </button>

      <button className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white">
        <Calendar size={15} />
        June 18, 2026
      </button>
    </div>
  );
}