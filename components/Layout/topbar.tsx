"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Bell, Calendar, LogOut, Menu, RefreshCw, UserCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { routeMeta } from "@/lib/navigation";

export function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();

  const [refreshing, setRefreshing] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const meta = routeMeta[pathname] ?? {
    title: "SmartMine",
    subtitle: "AI Operations Center",
  };

  async function handleRefresh() {
    try {
      setRefreshing(true);

      const response = await fetch("/api/refresh", {
        method: "POST",
      });

      const result = await response.json();

      if (!result.ok) {
        alert(result.error ?? "Refresh failed");
        return;
      }

      window.location.reload();
    } catch (error) {
      alert(error instanceof Error ? error.message : "Refresh failed");
    } finally {
      setRefreshing(false);
    }
  }

  async function handleLogout() {
    try {
      setLoggingOut(true);
      await supabase.auth.signOut();
      router.push("/login");
      router.refresh();
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-800 bg-[#070D1C] px-4 md:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg border border-slate-800 bg-slate-950 p-2 text-slate-400 hover:text-white xl:hidden"
        >
          <Menu size={18} />
        </button>

        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-white">
            {meta.title}
          </div>
          <div className="hidden truncate text-xs text-slate-500 md:block">
            {meta.subtitle}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <button className="hidden rounded-lg border border-slate-800 bg-slate-950 p-2 text-slate-400 hover:text-white md:block">
          <Calendar size={16} />
        </button>

        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="rounded-lg border border-slate-800 bg-slate-950 p-2 text-slate-400 hover:text-white disabled:opacity-60"
        >
          <RefreshCw
            size={16}
            className={refreshing ? "animate-spin text-emerald-400" : ""}
          />
        </button>

        <button className="relative rounded-lg border border-slate-800 bg-slate-950 p-2 text-slate-400 hover:text-white">
          <Bell size={16} />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white">
            3
          </span>
        </button>

        <div className="hidden items-center gap-2 pl-2 md:flex">
          <UserCircle size={28} className="text-slate-400" />
          <div className="hidden text-right lg:block">
            <div className="text-xs font-medium text-white">Mine Manager</div>
            <div className="text-[10px] text-slate-500">SmartMine User</div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-400 hover:text-red-400 disabled:opacity-60"
        >
          <LogOut size={15} />
          <span className="hidden md:inline">
            {loggingOut ? "Logging out..." : "Logout"}
          </span>
        </button>
      </div>
    </header>
  );
}