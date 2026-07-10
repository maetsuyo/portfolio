"use client";

import { useEffect, useRef, useState } from "react";
import { PageState } from "../types/page";

export default function Footer({ currentPage, setPage }: PageState) {
  const containerRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLButtonElement>(null);
  const profileRef = useRef<HTMLButtonElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const active = currentPage === "home" ? homeRef.current : profileRef.current;
    if (container && active) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();
      setIndicator({
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
      });
    }
  }, [currentPage]);

  return (
    <footer className="bg-gray-800 text-white p-4 text-3xl flex justify-center">
      <div ref={containerRef} className="relative flex space-x-10">
        <div
          className="absolute top-0 h-full bg-gray-700 rounded transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]"
          style={{ left: indicator.left, width: indicator.width }}
        />
        <button
          ref={homeRef}
          onClick={() => setPage("home")}
          className={`relative px-6 py-2 rounded transition-colors duration-200 active:scale-95 ${
            currentPage === "home" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          Home
        </button>
        <button
          ref={profileRef}
          onClick={() => setPage("profile")}
          className={`relative px-6 py-2 rounded transition-colors duration-200 active:scale-95 ${
            currentPage === "profile" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          Profile
        </button>
      </div>
    </footer>
  );
}
