"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SplineImage from "../Spline";
const Landing = () => {

  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 pb-0 md:px-8 lg:py-22.5 2xl:px-0">
        <h1 className="text-center mt-5 text-sub-hero-xl pb-5 w-full xl:w-3/5 mx-auto text-black dark:text-white">We offer outsourcing solutions for businesses seeking high-caliber, culturally aligned offshore talent.</h1>
        <div className="z-1 mx-auto max-w-[1365px] cursor-pointer rounded-lg spline-container">
          <SplineImage />
        </div>
          {/* <Image
            width={335}
            height={384}
            src="/images/shape/shape-04.png"
            alt="Man"
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
          /> */}
            {/* <video src="/video/video_bg.mp4"
             autoPlay 
             loop 
             muted
             playsInline
            className="object-cover rounded-lg relative mx-auto max-w-sm md:max-w-screen-md 2xl:max-w-6xl xl:max-l-4xl -z-1 lg:left-0"></video> */}
          {/* <Image
            src="/images/hero/hero-image.jpg" // Replace with your image path
            alt="Hero Image"
            className="object-cover rounded-lg relative mx-auto max-w-sm md:max-w-screen-md xl:max-w-6xl xl:max-l-4xl" // Center and maintain aspect ratio
            width={1920}
            height={1080} // Set exact dimensions (optional)
          /> */}
        {/* </div> */}

          {/* <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle2"
            className="absolute -left-15 -top-6 -z-1 lg:left-0"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          /> */}

          {/* <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          /> */}

          {/* <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-full"
          >
            <h2 className="mb-4 text-fun-fact font-medium text-black dark:text-white">
              Hero image placeholder
            </h2>
            <p className="mx-auto lg:w-11/12 text-sub-hero text-black dark:text-white">
            This is where the hero image will be placed.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                50x50
              </h3>
              <p className="text-lg lg:text-para2 text-black dark:text-white">500x500</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                50x50
              </h3>
              <p className="text-lg lg:text-para2 text-black dark:text-white">500x500</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                50x50
              </h3>
              <p className="text-lg lg:text-para2 text-black dark:text-white">500x500</p>
            </motion.div>
          </div> */}
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default Landing;
