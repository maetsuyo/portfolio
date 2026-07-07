export default function Header() {
  return (
    <header className="relative bg-[#02020f]/90 backdrop-blur-md p-4 px-8 overflow-hidden">
      <div className="pointer-events-none absolute -top-16 left-16 w-64 h-64 rounded-full bg-cyan-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-16 right-24 w-56 h-56 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="cyber-border-bottom" />
      <div className="relative flex items-center gap-5 fade-in-down">
        <p className="text-xl font-bold tracking-[0.5em] uppercase font-mono cyber-text">
          <span className="text-cyan-400/60">[</span>Portfolio<span className="text-cyan-400/60">]</span>
        </p>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 via-emerald-500/15 to-transparent" />
      </div>
    </header>
  );
}
