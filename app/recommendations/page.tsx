import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DashboardFilters } from "@/components/dashboard/dashboard-filters";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { RecommendationPanel } from "@/components/dashboard/recommendation-panel";
import { SamplePanel } from "@/components/dashboard/sample-panel";
import { FleetHealthChart } from "@/components/charts/fleet-health-chart";

const kpis = [
  { title: "Total Recommendations", value: 48, change: 12 },
  { title: "Critical", value: 8, change: 2 },
  { title: "High Priority", value: 16, change: 4 },
  { title: "Medium Priority", value: 16, change: -2 },
  { title: "Low Priority", value: 8, change: 1 },
  { title: "Completed", value: 12, change: 3 },
];

export default function RecommendationsPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Recommendations</h1>
          <p className="mt-1 text-sm text-slate-400">
            Recommended Actions and Priorities
          </p>
        </div>

        <DashboardFilters />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-12">
          <section className="xl:col-span-8 rounded-xl border border-slate-800 bg-slate-950 p-6">
            <RecommendationPanel />
          </section>

          <SamplePanel title="Recommendation Summary" className="xl:col-span-4">
            <FleetHealthChart />
          </SamplePanel>

          <SamplePanel title="Recommendation Trend" className="xl:col-span-6" />
          <SamplePanel title="Implementation Progress" className="xl:col-span-6" />
        </div>
      </div>
    </DashboardShell>
  );
}