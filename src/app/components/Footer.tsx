"use client";

import { PageState } from "../types/page";

export default function Footer({ currentPage, setPage }: PageState) {
  return (
    <footer className="bg-gray-800 text-white p-4 text-3xl flex justify-center space-x-10">
      <button
        onClick={() => setPage("home")}
        className={`px-6 py-2 rounded transition-colors duration-200 ${
          currentPage === "home" ? "bg-gray-700" : "hover:bg-gray-700"
        }`}
      >
        Home
      </button>
      <button
        onClick={() => setPage("profile")}
        className={`px-6 py-2 rounded transition-colors duration-200 ${
          currentPage === "profile" ? "bg-gray-700" : "hover:bg-gray-700"
        }`}
      >
        Profile
      </button>
    </footer>
  );
}