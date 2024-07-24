"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SplineImage from "../Spline";
const Landing = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 pb-0 md:px-8 lg:pt-22.5 2xl:px-0">
        <h1 className="text-sub-hero-xl mx-auto mt-5 w-full pb-5 text-center text-black dark:text-white xl:w-3/5">
          We offer outsourcing solutions for businesses seeking high-caliber,
          culturally aligned offshore talent.
        </h1>
        <div className="spline-container z-1 mx-auto max-w-[1400px] cursor-pointer rounded-lg">
          <SplineImage />
        </div>
      </section>
    </>
  );
};

export default Landing;
