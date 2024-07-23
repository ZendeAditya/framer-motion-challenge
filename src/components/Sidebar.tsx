"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
type Props = {};
import { Button } from "@/components/ui/button";
const dayArray = [
  { Day: 1, link: "Day1" },
  { Day: 2, link: "Day2" },
  { Day: 3, link: "Day3" },
  { Day: 4, link: "Day4" },
  { Day: 5, link: "Day5" },
  { Day: 6, link: "Day6" },
  { Day: 7, link: "Day7" },
  { Day: 8, link: "Day8" },
];
import { useRouter } from "next/navigation";
const Sidebar = (props: Props) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    if (!toggle) {
      document.addEventListener("keydown", function (event: KeyboardEvent) {
        if (event.key === "Escape") {
          setToggle((prev) => !prev);
        }
      });
    }
  }, [toggle]);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <motion.div className="relative border h-[95vh] shadow-lg shadow-black/30 my-3  py-2 rounded-lg bg-slate-400 mx-1">
      {/* sidebar arrow  */}
      <div className={`px-2 py-3 absolute -right-14 bottom-0`}>
        <Button onClick={handleToggle} className="">
          {!toggle ? <FaArrowLeft /> : <FaArrowRight />}
        </Button>
      </div>
      <div
        className={`${!toggle ? "w-60" : "w-0"}  relative  ${
          toggle ? "-translate-x-64" : "translate-x-0"
        } duration-500 ease-in transition-all`}
      >
        <div className="max-h-screen overflow-auto">
          <h2 className="text-lg ">#50 Days Framer motion Challenge</h2>
          <hr />
          <div className="text-center">
            {dayArray.map((day) => (
              <button
                key={day.Day}
                onClick={() => router.push(`/challenges/${day.link}`)}
                className="block py-2 hover:shadow-md px-2 text-center border rounded-full m-2 w-56"
              >
                Day {day.Day}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
