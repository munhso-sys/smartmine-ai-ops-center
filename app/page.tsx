import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DashboardFilters } from "@/components/dashboard/dashboard-filters";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { CriticalAlertsPanel } from "@/components/dashboard/critical-alerts-panel";
import { RecommendationPanel } from "@/components/dashboard/recommendation-panel";
import { ProductionTrendChart } from "@/components/charts/production-trend-chart";
import { FleetHealthChart } from "@/components/charts/fleet-health-chart";
import { executiveKpis } from "@/lib/mock/executive";

export default function Home() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Executive Dashboard</h1>
          <p className="mt-1 text-sm text-slate-400">
            SmartMine AI Operations Center
          </p>
        </div>

        <DashboardFilters />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {executiveKpis.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-12">
          <section className="xl:col-span-8 rounded-xl border border-slate-800 bg-slate-950 p-6">
            <h3 className="mb-4 text-sm font-semibold text-white">
              Production Trend
            </h3>
            <ProductionTrendChart />
          </section>

          <section className="xl:col-span-4 rounded-xl border border-slate-800 bg-slate-950 p-6">
            <h3 className="mb-4 text-sm font-semibold text-white">
              Fleet Health
            </h3>
            <FleetHealthChart />
          </section>

          <section className="xl:col-span-4 rounded-xl border border-slate-800 bg-slate-950 p-6">
            <CriticalAlertsPanel />
          </section>

          <section className="xl:col-span-8 rounded-xl border border-slate-800 bg-slate-950 p-6">
            <RecommendationPanel />
          </section>
        </div>
      </div>
    </DashboardShell>
  );
}