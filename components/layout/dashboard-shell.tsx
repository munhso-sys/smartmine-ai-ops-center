"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import { DashboardFooter } from "./dashboard-footer";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#050B14] text-white">
      <Sidebar />

      {mobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <button
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />

          <div className="relative h-full w-[280px] border-r border-slate-800 bg-[#060B18]">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-3 top-3 rounded-lg border border-slate-800 bg-slate-950 p-2 text-slate-400"
            >
              <X size={16} />
            </button>

            <Sidebar mobile />
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar onMenuClick={() => setMobileOpen(true)} />

        <main className="flex-1 overflow-auto p-4 pb-20 md:p-6">
          {children}
        </main>

        <DashboardFooter />
      </div>
    </div>
  );
}