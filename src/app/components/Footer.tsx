"use client";

import { PageState } from "../types/page";

export default function Footer({ currentPage, setPage }: PageState) {
  return (
    <footer className="relative bg-[#02020f]/90 backdrop-blur-md p-5 flex justify-center gap-6">
      <div className="cyber-border-top" />
      {(["home", "profile"] as const).map((page) => (
        <button
          key={page}
          onClick={() => setPage(page)}
          className={`
            px-10 py-3 text-sm font-medium tracking-[0.35em] uppercase font-mono
            rounded-sm transition-all duration-300 border
            ${currentPage === page
              ? "text-cyan-200 border-cyan-500/50 bg-cyan-600/10 shadow-[0_0_24px_rgba(34,211,238,0.25),inset_0_0_12px_rgba(34,211,238,0.08)]"
              : "text-slate-500 border-white/[0.08] hover:text-cyan-300 hover:border-cyan-500/35 hover:bg-cyan-600/5 hover:shadow-[0_0_14px_rgba(34,211,238,0.18)]"
            }
          `}
        >
          {page === "home" ? "Home" : "Profile"}
        </button>
      ))}
    </footer>
  );
}
