import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DashboardFilters } from "@/components/dashboard/dashboard-filters";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { SamplePanel } from "@/components/dashboard/sample-panel";
import { ProductionTrendChart } from "@/components/charts/production-trend-chart";

const kpis = [
  { title: "Production", value: "12,680", unit: "t", change: 5.2 },
  { title: "Availability", value: 92.5, unit: "%", change: 2.1 },
  { title: "Utilization", value: 85.3, unit: "%", change: -1.5 },
  { title: "OEE", value: 78.6, unit: "%", change: 3.4 },
  { title: "Downtime", value: 5.6, unit: "hr", change: -8.3 },
  { title: "Alerts", value: 24, change: 12 },
];

export default function KpiPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">KPI Dashboard</h1>
          <p className="mt-1 text-sm text-slate-400">
            Executive KPI Monitoring and Target Attainment
          </p>
        </div>

        <DashboardFilters />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-12">
          <SamplePanel title="KPI Trend Analysis" className="xl:col-span-8">
            <ProductionTrendChart />
          </SamplePanel>

          <SamplePanel title="KPI Target Attainment" className="xl:col-span-4" />

          <SamplePanel title="KPI Scorecard" className="xl:col-span-6" />

          <SamplePanel title="KPI Summary by Fleet" className="xl:col-span-6" />
        </div>
      </div>
    </DashboardShell>
  );
}