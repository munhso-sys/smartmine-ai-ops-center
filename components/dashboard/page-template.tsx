import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DashboardFilters } from "@/components/dashboard/dashboard-filters";
import { SamplePanel } from "@/components/dashboard/sample-panel";

export function PageTemplate({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
        </div>

        <DashboardFilters />

        <div className="grid gap-4 xl:grid-cols-12">
          <SamplePanel title="Overview" className="xl:col-span-8" />
          <SamplePanel title="Summary" className="xl:col-span-4" />
          <SamplePanel title="Analytics" className="xl:col-span-6" />
          <SamplePanel title="Insights" className="xl:col-span-6" />
          <SamplePanel title="Details" className="xl:col-span-12" />
        </div>
      </div>
    </DashboardShell>
  );
}