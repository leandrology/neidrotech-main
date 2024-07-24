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
          <div className="xs:text-center">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left mx-auto md:text-center"
            >
              <h1 className="text-hid-title mb-5 text-left text-[4vw] text-black dark:text-white">
                Remote <span className="text-primary">Role Expertise </span>
              </h1>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top mx-auto"
            >
              <p className="text-sub-hero text-left text-black dark:text-white">
                Build your ultimate remote staff with our expert recruitment and
                onboarding. Access top talent worldwide, seamlessly integrate
                them into your team, and unlock their potential to drive
                innovation and business growth. Ignite your company's
                performance with a dedicated remote workforce.
              </p>
            </motion.div>
          </div>
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
              <h1 className="text-hid-title mx-auto mt-5 pb-5 pt-15 text-black dark:text-white xl:w-full">
                Partnership For Growth
              </h1>
              <p className="text-sub-hero mx-auto text-black dark:text-white md:w-full">
                In today's dynamic corporate world, success hinges on having
                both a capable team and a well-defined strategy. Niedrotech
                stands as your ally in this endeavor, pairing you with top-tier
                global professionals and utilizing cutting-edge solutions to
                boost your business performance.
              </p>
              <p className="text-sub-hero mx-auto text-black dark:text-white md:w-full">
                You're not alone on this journey – we're by your side, dedicated
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
                  <h1 className="text-hid-title mx-auto mt-5 pb-5 pt-15 text-left text-black dark:text-white md:text-center xl:w-full">
                    Global Industry Experts
                  </h1>
                  <p className="text-sub-hero mx-auto text-left text-black dark:text-white md:text-center">
                    Niedrotech has collaborated closely with diverse businesses,
                    from startups to enterprises, spanning multiple sectors. Our
                    expertise extends across numerous industries, including:
                  </p>
                </motion.div>
              </div>
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
