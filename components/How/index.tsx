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
          <div className="xs:pb-20 flex lg:items-center lg:gap-8 xl:gap-32.5 xl:pb-20">
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
                <h1 className="text-hid-title mb-5 text-left text-[4vw] text-black dark:text-white">
                  Leverage <span className="text-primary">Global Talents </span>
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
                  Experience a seamless transition as we streamline the
                  onboarding process, swiftly matching you with top-tier talent
                  who perfectly align with your project needs. Our well-defined
                  system ensures efficient integration and rapid productivity
                  gains.
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
              <h1 className="text-hid-title mx-auto mt-10 pb-2 pt-5 text-center text-black dark:text-white md:text-6xl xl:w-full">
                Planning to Execution
              </h1>
              <p className="text-sub-hero mx-auto pb-5 text-center text-black dark:text-white">
                Our streamlined process ensures a smooth path to your project
                goals.
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
              <div className="text-sub-hero mt-0 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-0 lg:grid-cols-2 xl:mt-0 xl:gap-12.5">
                {howData.map((How, key) => (
                  <SingleHow how={How} key={key} />
                ))}
              </div>
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
              <h2 className="text-section-title relative mb-6 font-medium text-black dark:text-white">
                Project Consultation
              </h2>
              <p className="text-sub-feature text-black dark:text-white">
                We'll start by gathering all your project requirements to
                determine the exact scope and limitations.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    -
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-sub-feature mb-0.5 font-semibold text-black dark:text-white">
                    Comprehensive Assessment
                  </h3>
                  <p className="text-black dark:text-white">
                    A deep dive into your business operations to pinpoint
                    specific needs and opportunities for growth.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    -
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-sub-feature mb-0.5 font-semibold text-black dark:text-white">
                    Strategic Goal Alignment
                  </h3>
                  <p className="text-black dark:text-white">
                    Clearly defining your objectives and translating them into
                    actionable project plans.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    -
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-sub-feature mb-0.5 font-semibold text-black dark:text-white">
                    Collaborative Visioning
                  </h3>
                  <p className="text-black dark:text-white">
                    Fostering open communication and teamwork to create a
                    unified roadmap for project success.
                  </p>
                </div>
              </div>
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
                Talent Acquisition
              </h2>
              <p className="text-sub-feature text-black dark:text-white">
                Quality is our priority. The more details you provide about your
                project, the better we can tailor our recruitment approach.{" "}
                <br /> This meticulous process is how we guarantee you find the
                best talent available.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    -
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-sub-feature mb-0.5 font-semibold text-black dark:text-white">
                    Comprehensive Talent Evaluation
                  </h3>
                  <p className="text-black dark:text-white">
                    Thoroughly evaluating candidates' skills, experience, and
                    cultural fit for your team.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    -
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-sub-feature mb-0.5 font-semibold text-black dark:text-white">
                    Targeted Talent Acquisition
                  </h3>
                  <p className="text-black dark:text-white">
                    Leveraging our industry expertise to find top-tier
                    professionals who align with your business goals.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    -
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-sub-feature mb-0.5 font-semibold text-black dark:text-white">
                    Rapid Talent Deployment
                  </h3>
                  <p className="text-black dark:text-white">
                    Streamlining the onboarding process to quickly integrate new
                    hires and maximize productivity.
                  </p>
                </div>
              </div>
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
              <h2 className="text-section-title relative mb-6 font-medium text-black dark:text-white">
                Team Onboarding
              </h2>
              <p className="text-sub-feature text-black dark:text-white">
                Don't worry about onboarding. We leverage our extensive
                experience to seamlessly integrate new team members into your
                operations, minimizing disruption and maximizing productivity.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    -
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-sub-feature mb-0.5 font-semibold text-black dark:text-white">
                    Customized Onboarding Process
                  </h3>
                  <p className="text-black dark:text-white">
                    Tailoring the onboarding process to match individual
                    learning styles and career goals.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    -
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-sub-feature mb-0.5 font-semibold text-black dark:text-white">
                    Full Resource Support
                  </h3>
                  <p className="text-black dark:text-white">
                    Equipping new hires with all necessary tools, training
                    materials, and access to company resources.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    -
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-sub-feature mb-0.5 font-semibold text-black dark:text-white">
                    Collaborative Team Integration
                  </h3>
                  <p className="text-black dark:text-white">
                    Facilitating seamless interaction between new and existing
                    team members to foster a supportive work environment.
                  </p>
                </div>
              </div>
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

      <section className="overflow-hidden pb-30 lg:pb-25 xl:pb-30">
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
                Performance Tracking
              </h2>
              <p className="text-sub-feature text-black dark:text-white">
                Your team's success is our success. We go beyond just finding
                talent. Our commitment to ongoing assessment and feedback helps
                your outsourced team continuously improve and deliver peak
                performance.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    -
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-sub-feature mb-0.5 font-semibold text-black dark:text-white">
                    Commitment to Excellence
                  </h3>
                  <p className="text-black dark:text-white">
                    We strive for the highest quality in everything we do, from
                    our products and services to our customer interactions. We
                    are relentless in our pursuit of continuous improvement.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    -
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-sub-feature mb-0.5 font-semibold text-black dark:text-white">
                    Customer Satisfaction
                  </h3>
                  <p className="text-black dark:text-white">
                    Your satisfaction is our top priority. We listen to your
                    needs and feedback to ensure we are exceeding your
                    expectations and building lasting relationships.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    -
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-sub-feature mb-0.5 font-semibold text-black dark:text-white">
                    Integrity
                  </h3>
                  <p className="text-black dark:text-white">
                    We foster a culture of creativity and embrace new ideas. We
                    are constantly looking for ways to improve our offerings and
                    stay ahead of the curve.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TeamContact />
    </div>
  );
};

export default How;
