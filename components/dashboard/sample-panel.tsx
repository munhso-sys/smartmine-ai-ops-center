export function SamplePanel({
  title,
  children,
  className = "",
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-xl border border-slate-800 bg-slate-950 p-6 ${className}`}
    >
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      {children ?? <div className="h-40 rounded-lg bg-slate-900/60" />}
    </section>
  );
}