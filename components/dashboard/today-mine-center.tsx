import { KpiCard } from "@/components/dashboard/kpi-card";
import { CriticalAlertsPanel } from "@/components/dashboard/critical-alerts-panel";
import { RecommendationPanel } from "@/components/dashboard/recommendation-panel";
import { FleetHealthChart } from "@/components/charts/fleet-health-chart";

const todayKpis = [
  { title: "Trips", value: 318, change: 7.2 },
  { title: "Queue Time", value: 12.4, unit: "min", change: -5.1 },
  { title: "Fleet Utilization", value: 87.2, unit: "%", change: 3.8 },
  { title: "Fuel Burn", value: "18,420", unit: "L", change: 2.1 },
  { title: "Cycle Time", value: 38.6, unit: "min", change: -2.4 },
  { title: "Operational Delays", value: 4, change: -3 },
];

const dispatchQueue = [
  { truck: "TR-012", from: "West Pit", to: "Crusher 01", queue: "4.2 min", status: "Hauling" },
  { truck: "TR-018", from: "Central Pit", to: "Crusher 02", queue: "8.5 min", status: "Queueing" },
  { truck: "TR-024", from: "East Pit", to: "Waste Dump", queue: "2.1 min", status: "Loading" },
  { truck: "TR-039", from: "Stockpile 1", to: "Crusher 01", queue: "6.8 min", status: "Hauling" },
];

const timeline = [
  { asset: "EX120", status: "Loading", width: "76%" },
  { asset: "LD-07", status: "Active", width: "68%" },
  { asset: "TR-018", status: "Queue", width: "42%" },
  { asset: "DR-006", status: "Drilling", width: "58%" },
];

export function TodayMineCenter() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Today&apos;s Mine Center</h1>
        <p className="mt-1 text-sm text-slate-400">
          Daily Operational Summary and Key Shift Insights
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {todayKpis.map((kpi) => (
          <KpiCard key={kpi.title} {...kpi} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-12">
        <section className="xl:col-span-8 rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h3 className="mb-4 text-sm font-semibold text-white">Fleet Timeline</h3>

          <div className="space-y-4">
            {timeline.map((item) => (
              <div key={item.asset}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-white">{item.asset}</span>
                  <span className="text-slate-400">{item.status}</span>
                </div>

                <div className="h-3 rounded-full bg-slate-800">
                  <div
                    className="h-3 rounded-full bg-emerald-400"
                    style={{ width: item.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="xl:col-span-4 rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h3 className="mb-4 text-sm font-semibold text-white">Active Equipment</h3>
          <FleetHealthChart />
        </section>

        <section className="xl:col-span-7 rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h3 className="mb-4 text-sm font-semibold text-white">Dispatch Queue</h3>

          <div className="overflow-hidden rounded-lg border border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3">Truck</th>
                  <th className="px-4 py-3">From</th>
                  <th className="px-4 py-3">To</th>
                  <th className="px-4 py-3">Queue</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800">
                {dispatchQueue.map((row) => (
                  <tr key={row.truck} className="bg-slate-950">
                    <td className="px-4 py-3 font-medium text-white">{row.truck}</td>
                    <td className="px-4 py-3 text-slate-400">{row.from}</td>
                    <td className="px-4 py-3 text-slate-400">{row.to}</td>
                    <td className="px-4 py-3 text-yellow-400">{row.queue}</td>
                    <td className="px-4 py-3 text-emerald-400">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="xl:col-span-5 rounded-xl border border-slate-800 bg-slate-950 p-6">
          <CriticalAlertsPanel />
        </section>

        <section className="xl:col-span-12 rounded-xl border border-slate-800 bg-slate-950 p-6">
          <RecommendationPanel />
        </section>
      </div>
    </div>
  );
}