"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import howData from "./HowData";
import SingleHow from "./SingleHow";
import ContactPage from "@/app/(site)/contact/page";
import TeamContact from "../TeamContact";

const How = () => {
  return (
    <div>
      <section className="overflow-hidden pb-20 pt-10 md:pt-10 xl:pb-10 xl:pt-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="xs:text-center md:w-3/4">
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                 Niedrotech - Your trusted IT partner
              </h4> */}
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
                <h1 className="text-section-title xs:mx-10 mb-5 text-center text-black dark:text-white">
                  Leverage global
                </h1>
                <h1 className="text-section-title xs:mx-10 mb-5 text-center text-black dark:text-white xl:pb-10">
                  talent for your success
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
                className="animate_top mx-10"
              >
                <p className="text-sub-hero text-black dark:text-white">
                  Experience a seamless transition with our well-defined process
                  for onboarding premium talent.
                </p>
              </motion.div>
            </div>

            <div className="animate_right hidden md:w-1/4 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: 20,
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
                  className="animate_right mx-auto text-center"
                >
                  {/* <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                /> */}
                  {/* <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                /> */}
                  <Image
                    src="/images/shape/shape-02.svg"
                    alt="shape"
                    width={36.9}
                    height={36.7}
                    className="absolute bottom-0 right-0 z-10"
                  />
                  <Image
                    src="/images/shape/shape-03.svg"
                    alt="shape"
                    width={21.64}
                    height={21.66}
                    className="absolute -right-6.5 bottom-0 z-1"
                  />
                  <div className="relative aspect-square w-full">
                    <Image
                      className="dark:hidden"
                      src="/images/shape/shape-04.png"
                      alt="Guy in balloon"
                      fill
                    />
                    <Image
                      className="hidden dark:block"
                      src="/images/shape/shape-04.png"
                      alt="Guy in balloon"
                      fill
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
          className="animate_right md:text-center"
        >
          <h1 className="xs:text-left mx-10 mt-5 pb-2 pt-5 text-6xl text-black dark:text-white xl:w-full">
            From detailed planning to peak execution
          </h1>
          <p className="text-sub-hero mx-10 pb-5 text-black dark:text-white">
            Our streamlined process guides your success:
          </p>
          {/* <p className="text-sub-hero xs:text-left mx-auto mt-5 pb-2 text-black dark:text-white xl:w-full">
            Our streamlined process guides your success:
          </p> */}
        </motion.div>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: 20,
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
          className="animate_right text-center"
        >
          <div className="text-sub-hero mt-10 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-0 lg:grid-cols-4 xl:mt-0 xl:gap-12.5">
            {howData.map((How, key) => (
              <SingleHow how={How} key={key} />
            ))}
          </div>
        </motion.div>
      </div>

      <section className="py-10">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              className="animate_left md:w-1/2"
            >
              {/* <h1 className="font-medium uppercase text-black dark:text-white">
                Launch Your SaaS Fast
              </h1> */}
              <h2 className="text-section-title relative mb-6 font-medium text-black dark:text-white">
                Initial Meeting
              </h2>
              <p className="text-sub-feature text-black dark:text-white">
                We'll start by gathering all your project requirements to
                determine the exact scope and limitations.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
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
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="text-section-title relative mb-6 font-medium text-black dark:text-white">
                Recruitment
              </h2>
              <p className="text-sub-feature text-black dark:text-white">
                Quality is our priority. The more details you provide about your
                project, the better we can tailor our recruitment approach. This
                meticulous process is how we guarantee you find the best talent
                available.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              className="animate_left md:w-1/2"
            >
              {/* <h1 className="font-medium uppercase text-black dark:text-white">
                Launch Your SaaS Fast
              </h1> */}
              <h2 className="text-section-title relative mb-6 font-medium text-black dark:text-white">
                Talent Integration
              </h2>
              <p className="text-sub-feature text-black dark:text-white">
                Don't worry about onboarding. We leverage our extensive
                experience to seamlessly integrate new team members into your
                operations, minimizing disruption and maximizing productivity.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
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
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden pb-0 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="text-section-title relative mb-6 font-medium text-black dark:text-white">
                Performance Tracker
              </h2>
              <p className="text-sub-feature text-black dark:text-white">
                Your team's success is our success. We go beyond just finding
                talent. Our commitment to ongoing assessment and feedback helps
                your outsourced team continuously improve and deliver peak
                performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <TeamContact />
    </div>
  );
};

export default How;
