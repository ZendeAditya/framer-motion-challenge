"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
type Props = {};
const Landing = (props: Props) => {
  const router = useRouter();
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-6xl  font-bold ">
          Are You an Animation Aficionado? <br className="" /> Dive In!
        </h2>
        <p className="py-3 font-semibold text-lg px-4">
          Witness my UI designs come alive with daily Framer Motion challenges.
        </p>
        <Button className="w-36 rounded-full" onClick={() => router.push("/challenges")}>
          Get Started!
        </Button>
      </div>
    </section>
  );
};

export default Landing;
