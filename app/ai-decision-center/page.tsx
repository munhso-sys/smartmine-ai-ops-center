import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DashboardFilters } from "@/components/dashboard/dashboard-filters";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { SamplePanel } from "@/components/dashboard/sample-panel";
import { RecommendationPanel } from "@/components/dashboard/recommendation-panel";
import { FleetHealthChart } from "@/components/charts/fleet-health-chart";

const kpis = [
  { title: "AI Decision Score", value: 87, unit: "/100", change: 4.1 },
  { title: "Business Impact", value: "$215K", change: 9.2 },
  { title: "Risks Identified", value: 24, change: 6 },
  { title: "Actions Recommended", value: 12, change: 8 },
  { title: "Auto Resolution", value: 42, unit: "%", change: 5.4 },
  { title: "Confidence", value: 91, unit: "%", change: 3.7 },
];

export default function AiDecisionCenterPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">AI Decision Center</h1>
          <p className="mt-1 text-sm text-slate-400">
            AI-Powered Operational Recommendations and Decisions
          </p>
        </div>

        <DashboardFilters />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-12">
          <section className="xl:col-span-6 rounded-xl border border-slate-800 bg-slate-950 p-6">
            <RecommendationPanel />
          </section>

          <SamplePanel title="Decision Priority Matrix" className="xl:col-span-3" />
          <SamplePanel title="AI Insight Summary" className="xl:col-span-3" />

          <SamplePanel title="Risk Overview" className="xl:col-span-4">
            <FleetHealthChart />
          </SamplePanel>

          <SamplePanel title="Predicted Outcomes" className="xl:col-span-5" />
          <SamplePanel title="Recent AI Decisions" className="xl:col-span-3" />
        </div>
      </div>
    </DashboardShell>
  );
}