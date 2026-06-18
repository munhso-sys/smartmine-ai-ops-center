import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050B14] px-6 text-white">
      <div className="max-w-md text-center">
        <div className="text-6xl font-bold text-emerald-400">404</div>

        <h1 className="mt-6 text-2xl font-bold">Page not found</h1>

        <p className="mt-3 text-sm text-slate-400">
          The page you are looking for does not exist or is not available yet.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400"
        >
          Back to Executive Dashboard
        </Link>
      </div>
    </main>
  );
}