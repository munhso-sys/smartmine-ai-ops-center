import { DashboardShell } from "@/components/Layout/dashboard-shell"
import { TodayMineCenter } from "@/components/dashboard/today-mine-center"

export default function Page() {
  return (
    <DashboardShell>
      <TodayMineCenter />
    </DashboardShell>
  )
}