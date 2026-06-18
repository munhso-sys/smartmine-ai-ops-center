import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DashboardFilters } from "@/components/dashboard/dashboard-filters";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { SamplePanel } from "@/components/dashboard/sample-panel";
import { ProductionTrendChart } from "@/components/charts/production-trend-chart";
import { FleetHealthChart } from "@/components/charts/fleet-health-chart";
import { RecommendationPanel } from "@/components/dashboard/recommendation-panel";

type TemplateType =
  | "operations"
  | "fleet-health"
  | "predictive-maintenance"
  | "document-ai"
  | "risk"
  | "root-cause"
  | "dispatch"
  | "fuel"
  | "production"
  | "equipment-health"
  | "maintenance-planner"
  | "rag-search"
  | "sop-manuals"
  | "data-sources"
  | "settings";

const configs = {
  operations: {
    title: "Operations Center",
    subtitle: "Dispatch Map, Fleet Timeline and Real-Time Mine Operations",
    kpis: [
      { title: "Active Trucks", value: 42, change: 4 },
      { title: "Active Loaders", value: 8, change: 1 },
      { title: "Trips", value: 318, change: 7.2 },
      { title: "Queue Time", value: 12.4, unit: "min", change: -5.1 },
      { title: "Cycle Time", value: 38.6, unit: "min", change: -2.4 },
      { title: "Production", value: "12,680", unit: "t", change: 5.2 },
    ],
    panels: ["Dispatch Map", "Fleet Timeline", "Haul Cycle Analytics", "Bottleneck Insights"],
  },

  "fleet-health": {
    title: "Fleet Health",
    subtitle: "Asset Tree, MTBF, MTTR and Fleet Reliability Monitoring",
    kpis: [
      { title: "Fleet Availability", value: 92.5, unit: "%", change: 2.1 },
      { title: "MTBF", value: 148, unit: "hr", change: 6.3 },
      { title: "MTTR", value: 4.2, unit: "hr", change: -8.1 },
      { title: "Critical Assets", value: 7, change: 2 },
      { title: "Open Work Orders", value: 36, change: -4 },
      { title: "Health Score", value: 81, unit: "/100", change: 3.8 },
    ],
    panels: ["Asset Tree", "Fleet Health Distribution", "MTBF / MTTR Trend", "Critical Asset Watchlist"],
  },

  "predictive-maintenance": {
    title: "Predictive Maintenance",
    subtitle: "Failure Prediction AI and Maintenance Planning",
    kpis: [
      { title: "Failure Risk", value: 24, unit: "%", change: -3.2 },
      { title: "Predicted Failures", value: 9, change: 3 },
      { title: "Maintenance Due", value: 18, change: 5 },
      { title: "Avoided Downtime", value: 42, unit: "hr", change: 11.4 },
      { title: "Cost Avoided", value: "$86K", change: 9.8 },
      { title: "AI Confidence", value: 91, unit: "%", change: 2.4 },
    ],
    panels: ["Failure Prediction AI", "Maintenance Priority Queue", "Component Risk Trend", "Recommended Maintenance Actions"],
  },

  "document-ai": {
    title: "Document AI",
    subtitle: "PDF Upload, OCR, RAG Search and Knowledge Assistant",
    kpis: [
      { title: "Documents", value: 248, change: 12 },
      { title: "Indexed Chunks", value: "18.4K", change: 8.2 },
      { title: "OCR Queue", value: 7, change: -3 },
      { title: "RAG Queries", value: 126, change: 22 },
      { title: "Answer Accuracy", value: 87, unit: "%", change: 4.1 },
      { title: "Knowledge Risk", value: 18, unit: "%", change: -2.8 },
    ],
    panels: ["PDF Upload / OCR Queue", "Hybrid RAG Search", "Document Categories", "Recent Knowledge Answers"],
  },

  risk: {
    title: "Risk Center",
    subtitle: "Operational Risk Matrix and Risk Monitoring",
    kpis: [
      { title: "Total Risks", value: 56, change: 8 },
      { title: "Critical Risks", value: 9, change: 2 },
      { title: "High Risks", value: 18, change: 4 },
      { title: "Mitigated", value: 21, change: 6 },
      { title: "Risk Score", value: 72, unit: "/100", change: -3.4 },
      { title: "Business Exposure", value: "$320K", change: 12.5 },
    ],
    panels: ["Risk Matrix", "Risk Trend", "Risk Drivers", "Mitigation Actions"],
  },

  "root-cause": {
    title: "Root Cause Analysis",
    subtitle: "Fishbone, Event Timeline and AI Cause Detection",
    kpis: [
      { title: "Incidents", value: 16, change: 4 },
      { title: "Root Causes", value: 11, change: 3 },
      { title: "Unresolved", value: 5, change: -2 },
      { title: "Avg Resolution", value: 6.4, unit: "hr", change: -7.1 },
      { title: "Repeat Issues", value: 8, change: 2 },
      { title: "AI Confidence", value: 89, unit: "%", change: 3.3 },
    ],
    panels: ["Fishbone Analysis", "Event Timeline", "Cause Contribution", "Corrective Actions"],
  },

dispatch: {
  title: "Dispatch Intelligence",
  subtitle: "Real-Time Fleet Assignment Optimization and Dispatch Recommendations",
  kpis: [
    { title: "Total Payload", value: 785, unit: "t", change: 6.2 },
    { title: "Trips Completed", value: 42, change: 4 },
    { title: "Dispatch Efficiency", value: 92.6, unit: "%", change: 2.8 },
    { title: "Avg Cycle Time", value: 32.4, unit: "min", change: -1.8 },
    { title: "Truck Utilization", value: 87.3, unit: "%", change: 3.6 },
    { title: "Recommended Actions", value: 8, change: 2 },
  ],
  panels: ["Live Dispatch Map", "Dispatch Recommendations", "Fleet Status", "Queue Analysis"],
},

fuel: {
  title: "Fuel Intelligence",
  subtitle: "Fuel Monitoring, Optimization and Loss Prevention",
  kpis: [
    { title: "Fuel Consumption", value: "128,450", unit: "L", change: 4.2 },
    { title: "Fuel Cost", value: "$165K", change: 4.2 },
    { title: "Liters / Tonne", value: 0.164, unit: "L/t", change: -3.6 },
    { title: "Avg Fuel Price", value: "$1.29", unit: "/L", change: 1.1 },
    { title: "Idle Fuel Waste", value: "5,842", unit: "L", change: -12.8 },
    { title: "Fuel Efficiency", value: 87, unit: "/100", change: 5 },
  ],
  panels: ["Fuel Consumption Over Time", "Fuel by Fleet Group", "Fuel Anomalies", "AI Fuel Recommendations"],
},

production: {
  title: "Production Monitoring",
  subtitle: "Production Tracking, Plan Attainment and Operational Alerts",
  kpis: [
    { title: "Ore Mined", value: "86,320", unit: "t", change: 5.8 },
    { title: "Waste Moved", value: "42,130", unit: "t", change: 6.9 },
    { title: "Strip Ratio", value: 0.49, change: -2.1 },
    { title: "Production Rate", value: "5,352", unit: "t/h", change: 4.3 },
    { title: "Plant Attainment", value: 96.3, unit: "%", change: 4.7 },
    { title: "Downtime", value: 2.4, unit: "%", change: -1.2 },
  ],
  panels: ["Live Production Map", "Production vs Plan", "Pit Performance", "Production Alerts"],
},

"equipment-health": {
  title: "Equipment Health",
  subtitle: "Real-Time Equipment Monitoring and Diagnostics",
  kpis: [
    { title: "Total Equipment", value: 128, change: 3 },
    { title: "Health Index", value: 87.6, unit: "/100", change: 2.4 },
    { title: "Operating", value: 112, change: 4 },
    { title: "Equipment Alerts", value: 18, change: -2 },
    { title: "Maintenance Due", value: 26, change: 6 },
    { title: "MTTR", value: 4.6, unit: "hr", change: -0.3 },
  ],
  panels: ["Equipment Health Overview", "Health Index Trend", "Predictive Alerts", "Equipment List"],
},

"maintenance-planner": {
  title: "Maintenance Planner",
  subtitle: "Maintenance Scheduling, Resources and Parts Planning",
  kpis: [
    { title: "Maintenance Due", value: 26, change: 7 },
    { title: "Scheduled WOs", value: 128, change: 12 },
    { title: "PM Compliance", value: 92.3, unit: "%", change: 2.4 },
    { title: "Estimated Downtime", value: 34.2, unit: "hr", change: -8.1 },
    { title: "Cost Avoidance", value: "$1.24M", change: 7.2 },
    { title: "Backlog WOs", value: 42, change: -6 },
  ],
  panels: ["Work Overview", "Maintenance Calendar", "Resource Allocation", "Parts Availability"],
},

"rag-search": {
  title: "Hybrid RAG Search",
  subtitle: "Search Across Documents, Data and Operational Knowledge",
  kpis: [
    { title: "Searches Today", value: 342, change: 10.8 },
    { title: "Users", value: 87, change: 7.3 },
    { title: "Answered", value: 312, unit: "queries", change: 14 },
    { title: "Avg Response", value: 2.34, unit: "sec", change: -0.4 },
    { title: "Relevance Score", value: 0.92, change: 0.05 },
    { title: "Sources Accessed", value: "1,248", change: 15.2 },
  ],
  panels: ["Hybrid RAG Search", "Answer Summary", "Top Sources", "Search Mode Comparison"],
},

"sop-manuals": {
  title: "SOP / Manuals",
  subtitle: "Operational Procedures and Technical Manuals",
  kpis: [
    { title: "Total Documents", value: 1286, change: 10.3 },
    { title: "SOPs", value: 542, change: 8.7 },
    { title: "Manuals", value: 744, change: 11.6 },
    { title: "Views", value: 3742, change: 14.2 },
    { title: "Compliance Rate", value: 94.6, unit: "%", change: 2.3 },
    { title: "Outdated Docs", value: 23, change: -4 },
  ],
  panels: ["Smart Search", "Document Categories", "Document Viewer", "AI Assistant"],
},

"data-sources": {
  title: "Data Sources",
  subtitle: "Connected Systems, Data Ingestion and Pipeline Monitoring",
  kpis: [
    { title: "Total Sources", value: 38, change: 2 },
    { title: "Connected", value: 32, change: 4 },
    { title: "Ingestion Jobs", value: 56, change: 8 },
    { title: "Data Volume", value: "1.28", unit: "TB", change: 18.6 },
    { title: "Last Refresh", value: 2, unit: "min", change: -1 },
    { title: "Failed Jobs", value: 2, change: -3 },
  ],
  panels: ["Data Source List", "Ingestion Status", "Data Source Details", "Recent Activity"],
},

settings: {
  title: "System Settings",
  subtitle: "Platform Configuration, Security and Data Management",
  kpis: [
    { title: "Platform Status", value: "Healthy", change: 0 },
    { title: "API Services", value: "Online", change: 0 },
    { title: "Users", value: 128, change: 5 },
    { title: "Roles", value: 14, change: 2 },
    { title: "Data Retention", value: 24, unit: "mo", change: 0 },
    { title: "Audit Events", value: "7.8K", change: 12.6 },
  ],
  panels: ["Platform Information", "Security Settings", "Data & Performance", "System Status"],
},

};

export function AdvancedPageTemplate({ type }: { type: TemplateType }) {
  const config = configs[type];

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">{config.title}</h1>
          <p className="mt-1 text-sm text-slate-400">{config.subtitle}</p>
        </div>

        <DashboardFilters />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {config.kpis.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-12">
          <SamplePanel title={config.panels[0]} className="xl:col-span-7">
            {type === "operations" && <DispatchMapMock />}
            {type === "fleet-health" && <AssetTreeMock />}
            {type === "predictive-maintenance" && <FailurePredictionMock />}
            {type === "document-ai" && <DocumentUploadMock />}
            {type === "risk" && <RiskMatrixMock />}
            {type === "root-cause" && <FishboneMock />}
          </SamplePanel>

          <SamplePanel title={config.panels[1]} className="xl:col-span-5">
            {type === "fleet-health" || type === "risk" ? (
              <FleetHealthChart />
            ) : (
              <ProductionTrendChart />
            )}
          </SamplePanel>

          <SamplePanel title={config.panels[2]} className="xl:col-span-5">
            <ProductionTrendChart />
          </SamplePanel>

          <section className="xl:col-span-7 rounded-xl border border-slate-800 bg-slate-950 p-6">
            {type === "predictive-maintenance" ||
            type === "risk" ||
            type === "root-cause" ? (
              <RecommendationPanel />
            ) : (
              <GenericTable title={config.panels[3]} />
            )}
          </section>
        </div>
      </div>
    </DashboardShell>
  );
}

function DispatchMapMock() {
  return (
    <div className="relative h-72 overflow-hidden rounded-lg bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#00d68f22,transparent_30%),radial-gradient(circle_at_70%_60%,#3b82f622,transparent_25%)]" />
      {["TR-12", "TR-18", "EX-03", "LD-07", "TR-22"].map((x, i) => (
        <div
          key={x}
          className="absolute rounded-full bg-emerald-400 px-2 py-1 text-[10px] text-black"
          style={{ left: `${15 + i * 16}%`, top: `${25 + (i % 3) * 18}%` }}
        >
          {x}
        </div>
      ))}
      <div className="absolute bottom-4 left-4 text-xs text-slate-400">
        Dispatch Map Mock / Pit + Fleet Location
      </div>
    </div>
  );
}

function AssetTreeMock() {
  const items = ["Haul Trucks", "Excavators", "Loaders", "Dozers", "Drills"];
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item} className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
          <div className="flex justify-between text-sm">
            <span className="text-white">{item}</span>
            <span className="text-emerald-400">{92 - index * 6}%</span>
          </div>
          <div className="mt-2 h-2 rounded bg-slate-800">
            <div className="h-2 rounded bg-emerald-400" style={{ width: `${92 - index * 6}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function FailurePredictionMock() {
  return (
    <div className="space-y-3">
      {["EX120 Hydraulic Pump", "HDT95 Final Drive", "LD07 Transmission", "TR22 Brake System"].map(
        (item, i) => (
          <div key={item} className="flex justify-between rounded-lg border border-slate-800 bg-slate-900/60 p-3">
            <div>
              <p className="text-sm text-white">{item}</p>
              <p className="text-xs text-slate-400">Predicted failure window: {2 + i} days</p>
            </div>
            <span className="text-sm text-red-400">{78 - i * 8}%</span>
          </div>
        )
      )}
    </div>
  );
}

function DocumentUploadMock() {
  return (
    <div className="flex h-72 items-center justify-center rounded-lg border border-dashed border-slate-700 bg-slate-900/60">
      <div className="text-center">
        <div className="text-lg font-semibold text-white">Upload PDF / DOCX</div>
        <div className="mt-2 text-sm text-slate-400">OCR + chunking + vector indexing queue</div>
      </div>
    </div>
  );
}

function RiskMatrixMock() {
  return (
    <div className="grid h-72 grid-cols-5 gap-2">
      {Array.from({ length: 25 }).map((_, i) => {
        const high = i > 17;
        const med = i > 9 && i <= 17;
        return (
          <div
            key={i}
            className={[
              "rounded-lg border border-slate-800",
              high ? "bg-red-500/30" : med ? "bg-yellow-500/25" : "bg-emerald-500/20",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}

function FishboneMock() {
  return (
    <div className="relative h-72 rounded-lg bg-slate-900/60 p-6">
      <div className="absolute left-10 right-10 top-1/2 h-px bg-slate-600" />
      {["Machine", "Method", "Material", "People", "Environment", "Process"].map((x, i) => (
        <div
          key={x}
          className="absolute rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-300"
          style={{
            left: `${10 + i * 14}%`,
            top: i % 2 === 0 ? "25%" : "62%",
          }}
        >
          {x}
        </div>
      ))}
      <div className="absolute right-6 top-[44%] rounded bg-red-500/20 px-3 py-2 text-xs text-red-300">
        Downtime Spike
      </div>
    </div>
  );
}

function GenericTable({ title }: { title: string }) {
  const rows = ["EX120", "HDT95-03", "LD07", "TR22"];
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      <div className="overflow-hidden rounded-lg border border-slate-800">
        <table className="w-full text-sm">
          <tbody className="divide-y divide-slate-800">
            {rows.map((row, i) => (
              <tr key={row} className="bg-slate-950">
                <td className="px-4 py-3 text-white">{row}</td>
                <td className="px-4 py-3 text-slate-400">Status update</td>
                <td className="px-4 py-3 text-emerald-400">{90 - i * 7}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}