"use client";

import { useSwitchPage } from "../hooks/useSwitchPage";
import Footer from "./Footer";
import HomePageComponent from "./HomePage";
import ProfilePageComponent from "./ProfilePage";
import CyberGrid from "./CyberGrid";

export default function PortfolioComponent() {
  const { currentPage, setPage } = useSwitchPage();

  return (
    <div className="flex flex-col h-full cyber-grid-bg">
      <CyberGrid />
      <main className="flex-1 overflow-auto relative z-10">
        {currentPage === "home" && <HomePageComponent />}
        {currentPage === "profile" && <ProfilePageComponent />}
      </main>
      <Footer currentPage={currentPage} setPage={setPage} />
    </div>
  );
}
