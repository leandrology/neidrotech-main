"use client";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import ExpertiseData from "./expertiseData";
import Image from "next/image";
import ExpertiseItem from "./expertiseItem";

const Expertise = async () => {
  return (
    <div>
      <section className="pb-10 pt-0 lg:py-2 xl:pb-15 xl:pt-0">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
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
              className="animate_right text-left"
            >
              <h1 className="text-section-title mx-auto mt-5 pb-5 pt-20 text-black dark:text-white xl:w-full">
                Outsourcing like you’ve never known
              </h1>
              <p className="text-sub-hero mx-auto text-black dark:text-white md:w-full">
                In today's dynamic corporate world, success hinges on having
                both a capable team and a well-defined strategy. Niedrotech
                stands as your ally in this endeavor, pairing you with top-tier
                global professionals and utilizing cutting-edge solutions to
                boost your business performance.
              </p>
              <p className="text-sub-hero mx-auto text-black dark:text-white md:w-full">
                You're not solo on this voyage – we're by your side, dedicated
                to helping your company reach new pinnacles of achievement.
              </p>

              <div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 60,
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
                  className="animate_right"
                >
                  <h1 className="text-section-title mx-10 mt-5 pb-2 pt-30 text-center text-black dark:text-white xl:w-full">
                    Your Industry, Our Expertise
                  </h1>
                  <p className="text-sub-hero mx-10 pb-5 text-center text-black dark:text-white">
                    Niedrotech has collaborated closely with diverse businesses,
                    from startups to enterprises, spanning multiple sectors. Our
                    expertise extends across numerous industries, including:
                  </p>
                </motion.div>
              </div>

              {/* <h1 className="mx-auto mt-5 pb-5 pt-20 text-6xl text-black dark:text-white xl:w-full">
                Outsourcing like you’ve never known
              </h1>
              <p className="text-sub-hero mx-auto text-black dark:text-white md:w-full">
                Navigating the ever-changing business world demands both
                expertise and direction. Cloudstaff stands as your partner in
                this venture, providing top-tier international talent and
                cutting-edge technology to propel your company to new heights.
                We're not just a service provider; we're your co-pilot on the
                path to success.
              </p> */}
            </motion.div>
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {ExpertiseData.slice(0, 6).map((expertise, key) => (
              <ExpertiseItem expertise={expertise} key={key} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
