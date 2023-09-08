import React from "react";
import Topbar from "../shared/Topbar";
import LeftSideBar from "../shared/LeftSideBar";
import RightSidebar from "../shared/RightSidebar";
import Bottombar from "../shared/Bottombar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Topbar />
      <main className="flex">
        <LeftSideBar />
        <section className="main-container">
          <div className="w-full max-w-4xl mx-auto">{children}</div>
        </section>
        <RightSidebar />
      </main>
      <Bottombar />
    </div>
  );
};

export default MainLayout;
