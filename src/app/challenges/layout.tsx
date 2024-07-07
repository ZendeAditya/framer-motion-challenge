import React from "react";
import Sidebar from "@/components/Sidebar";

const ChallengeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white w-screen h-screen overflow-x-hidden overflow-auto">
      <section className="flex justify-between items-center  relative">
        <div className="absolute">
          <Sidebar />
        </div>
        <div className="">{children}</div>
      </section>
    </div>
  );
};

export default ChallengeLayout;
