export default function Header() {
  return (
    <header className="relative bg-[#02020f]/90 backdrop-blur-md p-4 px-8">
      <div className="nebula-border-bottom" />
      <div className="flex items-center gap-5 fade-in-down">
        <div className="relative w-7 h-7 flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-purple-600 opacity-60 blur-sm animate-pulse" />
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
        </div>
        <p className="text-xl font-bold tracking-[0.6em] uppercase font-mono stellar-text">
          Portfolio
        </p>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/40 via-pink-500/20 to-transparent" />
      </div>
    </header>
  );
}
