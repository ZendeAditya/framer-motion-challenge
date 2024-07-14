import React from "react";
import Sidebar from "@/components/Sidebar";

const ChallengeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white w-screen h-screen overflow-x-hidden overflow-auto">
      <div className="absolute z-10">
          <Sidebar />
        </div>
      <section className="relative">
        <div className="">{children}</div>
      </section>
    </div>
  );
};

export default ChallengeLayout;
