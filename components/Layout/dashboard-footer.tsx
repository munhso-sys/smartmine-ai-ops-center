"use client";

import { RefreshCw } from "lucide-react";

export function DashboardFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 flex h-10 items-center justify-between border-t border-slate-800 bg-[#070D1C] px-6 text-xs text-slate-400 xl:left-[280px]">
      <span>Last Updated: May 22, 2025 11:20 AM</span>

      <span className="hidden md:block">
        Data Source: SmartMine Data Platform / Supabase / Reporting Views
      </span>

      <span className="flex items-center gap-2 text-emerald-400">
        <RefreshCw size={13} />
        Auto Refresh: 60 sec
      </span>
    </footer>
  );
}