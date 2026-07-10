"use client";

import { useSwitchPage } from "../hooks/useSwitchPage";
import Footer from "./Footer";
import HomePageComponent from "./HomePage";
import ProfilePageComponent from "./ProfilePage";

export default function PortfolioComponent() {
  const { currentPage, setPage } = useSwitchPage();
  
  return (
    <div className="flex flex-col h-full bg-gray-900">
      <main key={currentPage} className="flex-1 overflow-auto animate-fade-in">
        {currentPage === "home" && <HomePageComponent />}
        {currentPage === "profile" && <ProfilePageComponent />}
      </main>
      <Footer currentPage={currentPage} setPage={setPage} />
    </div>
  );
}