import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DashboardFilters } from "@/components/dashboard/dashboard-filters";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { SamplePanel } from "@/components/dashboard/sample-panel";
import { ProductionTrendChart } from "@/components/charts/production-trend-chart";

const kpis = [
  { title: "Forecast Production", value: "13,450", unit: "t", change: 6.2 },
  { title: "Forecast Availability", value: 93.1, unit: "%", change: 1.8 },
  { title: "Forecast Utilization", value: 86.7, unit: "%", change: 2.4 },
  { title: "Forecast OEE", value: 79.2, unit: "%", change: 2.7 },
  { title: "Forecast Downtime", value: 4.9, unit: "hr", change: -10.3 },
  { title: "Forecast Cost", value: "$82.4K", change: 3.3 },
];

export default function ForecastPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Forecast Center</h1>
          <p className="mt-1 text-sm text-slate-400">
            Predictive Operations and Performance Forecasting
          </p>
        </div>

        <DashboardFilters />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-12">
          <SamplePanel title="Forecast Overview" className="xl:col-span-6">
            <ProductionTrendChart />
          </SamplePanel>

          <SamplePanel title="Forecast by KPI" className="xl:col-span-3" />
          <SamplePanel title="Scenario Comparison" className="xl:col-span-3" />
          <SamplePanel title="Forecast Drivers" className="xl:col-span-4" />
          <SamplePanel title="Forecast Accuracy" className="xl:col-span-4" />
          <SamplePanel title="Forecast Alerts & Insights" className="xl:col-span-4" />
        </div>
      </div>
    </DashboardShell>
  );
}