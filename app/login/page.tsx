"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050B14] px-6 text-white">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl lg:grid-cols-2">
        <section className="hidden min-h-[640px] flex-col justify-between bg-[radial-gradient(circle_at_30%_20%,#00d68f33,transparent_30%),linear-gradient(135deg,#07101f,#020617)] p-10 lg:flex">
          <div>
            <div className="text-2xl font-bold text-emerald-400">SmartMine</div>
            <div className="text-sm text-slate-400">Хиймэл оюун ухаант үйл ажиллагааны төв</div>
          </div>

          <div>
            <h1 className="max-w-md text-4xl font-bold leading-tight">
              Ухаалаг үйл ажиллагаа. Илүү ухаалаг шийдвэрүүд.
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Хөдөлмөрийн аюулгүй байдал, бүтээмж, засвар үйлчилгээ, түлшний хэмнэлт болон үйл ажиллагааны гүйцэтгэлд зориулсан хиймэл оюун ухаанд суурилсан бодит цагийн мэдээлэл, дүгнэлт.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <Metric label="Production" value="23,450 t" />
            <Metric label="Assets" value="126" />
            <Metric label="Availability" value="87%" />
            <Metric label="AI Monitoring" value="24/7" />
          </div>
        </section>

        <section className="flex min-h-[640px] items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">Sign in to SmartMine</h2>
              <p className="mt-2 text-sm text-slate-400">
                Хиймэл оюун ухаант үйл ажиллагааны төвдөө нэвтрэх
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-sm outline-none ring-emerald-500 transition focus:ring-2"
                />
              </div>

              <div>
                <label className="text-sm text-slate-300">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-sm outline-none ring-emerald-500 transition focus:ring-2"
                />
              </div>

              {error && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-slate-500">
              Аюулгүй · Найдвартай · Итгэлтэй
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-black/30 p-4">
      <div className="text-lg font-bold text-emerald-400">{value}</div>
      <div className="mt-1 text-[11px] text-slate-400">{label}</div>
    </div>
  );
}