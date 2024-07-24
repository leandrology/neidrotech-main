"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Team = () => {
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
                People <span className="text-primary">Behind Niedrotech </span>
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
                Our team is composed of seasoned professionals with a proven
                track record in the industry. With a deep understanding of your
                needs, we deliver exceptional solutions tailored to your
                business goals. Our expertise and dedication ensure your
                success.
              </p>
            </motion.div>
          </div>
          <div className="my-6 grid gap-8 md:grid-cols-2 lg:mb-16">
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
              className="animate_left"
            >
              <div className="items-center rounded-lg bg-gray-50 shadow dark:bg-black dark:text-white sm:flex">
                <a href="#">
                  <Image
                    width={200}
                    height={200}
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="/images/team/placeholder.png"
                    alt="Joe Ceriola"
                  />
                </a>
                <div className="p-0 pt-5 md:p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Joe Ceriola</a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    President & CEO
                  </span>
                  <p className="mb-4 mt-3 font-light text-gray-500 dark:text-white">
                    Joe leads Niedrotech's strategic vision, driving innovation
                    and growth in the BPO industry while fostering a culture of
                    excellence and client satisfaction.
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
              className="animate_right"
            >
              <div className="items-center rounded-lg bg-gray-50 shadow dark:bg-black sm:flex">
                <a href="#">
                  <Image
                    width={200}
                    height={200}
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="/images/team/placeholder.png"
                    alt="Alan Perillo"
                  />
                </a>
                <div className="p-0 pt-5 md:p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Alan Perillo</a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    Chairman & CTO
                  </span>
                  <p className="mb-4 mt-3 font-light text-gray-500 dark:text-white">
                    Alan spearheads Niedrotech's technological innovations,
                    overseeing IT infrastructure and implementing cutting-edge
                    solutions to enhance operational efficiency and client
                    services.
                  </p>
                </div>
              </div>
            </motion.div>
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
              className="animate_left"
            >
              <div className="items-center rounded-lg bg-gray-50 shadow dark:bg-black sm:flex">
                <a href="#">
                  <Image
                    width={200}
                    height={200}
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="/images/team/placeholder.png"
                    alt="Leander Josh"
                  />
                </a>
                <div className="p-0 pt-5 md:p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Leander Josh</a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    Technical Director
                  </span>
                  <p className="mb-4 mt-3 font-light text-gray-500 dark:text-white">
                    Leander oversees Niedrotech's technical operations, ensuring
                    seamless service delivery and implementing advanced systems
                    to meet evolving client needs and industry standards.
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
              className="animate_right"
            >
              <div className="items-center rounded-lg bg-gray-50 shadow dark:bg-black sm:flex">
                <a href="#">
                  <Image
                    width={200}
                    height={200}
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="/images/team/placeholder.png"
                    alt="placeholder"
                  />
                </a>
                <div className="p-0 pt-5 md:p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Ge Malasig</a>
                  </h3>
                  <span className="text-gray-500 dark:text-white">
                    Managing Director
                  </span>
                  <p className="mb-4 mt-3 font-light text-gray-500 dark:text-white">
                    Ge orchestrates Niedrotech's daily operations, aligning
                    business strategies with client objectives to drive
                    sustainable growth and operational excellence across all
                    departments.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
