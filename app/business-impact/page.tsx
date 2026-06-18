import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DashboardFilters } from "@/components/dashboard/dashboard-filters";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { SamplePanel } from "@/components/dashboard/sample-panel";
import { ProductionTrendChart } from "@/components/charts/production-trend-chart";
import { FleetHealthChart } from "@/components/charts/fleet-health-chart";

const kpis = [
  { title: "Revenue Impact", value: "$182K", change: 8.1 },
  { title: "Cost Impact", value: "$78.6K", change: -4.3 },
  { title: "Estimated Loss", value: "$48.8K", change: -12.5 },
  { title: "Loss Avoided", value: "$132K", change: 15.6 },
  { title: "ROI Impact", value: "21.7", unit: "%", change: 3.2 },
  { title: "Lost Production", value: "3,450", unit: "t", change: 7.2 },
];

export default function BusinessImpactPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Business Impact</h1>
          <p className="mt-1 text-sm text-slate-400">
            Financial and Operational Impact Analysis
          </p>
        </div>

        <DashboardFilters />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-12">
          <SamplePanel title="Financial Impact Waterfall" className="xl:col-span-5" />
          <SamplePanel title="Impact Drivers" className="xl:col-span-4" />
          <SamplePanel title="Impact by Category" className="xl:col-span-3">
            <FleetHealthChart />
          </SamplePanel>

          <SamplePanel title="Impact Over Time" className="xl:col-span-6">
            <ProductionTrendChart />
          </SamplePanel>

          <SamplePanel title="Scenario Comparison" className="xl:col-span-6" />
        </div>
      </div>
    </DashboardShell>
  );
}