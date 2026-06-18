"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bot,
  Database,
  FileText,
  Gauge,
  Home,
  Settings,
  Shield,
  Truck,
  Wrench,
} from "lucide-react";

const groups = [
  {
    title: "Command Center",
    items: [
      { label: "Home Overview", href: "/", icon: Home },
      { label: "Today's Mine Center", href: "/today", icon: Gauge },
    ],
  },
  {
    title: "Executive",
    items: [
      { label: "Executive Cockpit", href: "/", icon: BarChart3 },
      { label: "KPI Dashboard", href: "/kpi", icon: Activity },
      { label: "Business Impact", href: "/business-impact", icon: Gauge },
      { label: "Forecast Center", href: "/forecast", icon: BarChart3 },
    ],
  },
  {
    title: "AI Decision",
    items: [
      { label: "AI Decision Center", href: "/ai-decision-center", icon: Bot },
      { label: "Recommendations", href: "/recommendations", icon: Shield },
      { label: "Root Cause Analysis", href: "/root-cause", icon: Activity },
      { label: "Risk Center", href: "/risk", icon: AlertTriangle },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Operations", href: "/operations", icon: Truck },
      { label: "Dispatch Intelligence", href: "/dispatch", icon: Truck },
      { label: "Fuel Intelligence", href: "/fuel", icon: Gauge },
      { label: "Production Monitoring", href: "/production", icon: BarChart3 },
    ],
  },
  {
    title: "Asset Health",
    items: [
      { label: "Fleet / Asset Health", href: "/fleet-health", icon: Truck },
      { label: "Equipment Health", href: "/equipment-health", icon: Wrench },
      { label: "Predictive Maintenance", href: "/predictive-maintenance", icon: Activity },
      { label: "Maintenance Planner", href: "/maintenance-planner", icon: Wrench },
    ],
  },
  {
    title: "Knowledge",
    items: [
      { label: "Document AI", href: "/document-ai", icon: FileText },
      { label: "Hybrid RAG Search", href: "/rag-search", icon: Bot },
      { label: "SOP / Manuals", href: "/sop-manuals", icon: FileText },
    ],
  },
  {
    title: "Admin",
    items: [
      { label: "Data Sources", href: "/data-sources", icon: Database },
      { label: "System Settings", href: "/settings", icon: Settings },
    ],
  },
];

export function Sidebar({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  return (
    <aside
  className={[
    "w-[280px] shrink-0 border-r border-slate-800 bg-[#060B18]",
    mobile ? "block h-full" : "hidden xl:block",
  ].join(" ")}
>
      <div className="border-b border-slate-800 p-6">
        <div className="text-xl font-bold text-emerald-400">SmartMine</div>
        <div className="text-xs text-slate-400">AI Operations Center</div>
      </div>

      <nav className="h-[calc(100vh-88px)] overflow-auto px-3 py-4">
        {groups.map((group) => (
          <div key={group.title} className="mb-5">
            <div className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              {group.title}
            </div>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition",
                      active
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "text-slate-400 hover:bg-slate-900 hover:text-white",
                    ].join(" ")}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}