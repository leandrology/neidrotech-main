"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ServiceHero = async () => {
  return (
    <div className="relative h-[400px] w-full lg:h-screen">
      <Image
        src="/images/hero/services-hero.jpg"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-c-1315 px-7 md:px-8 xl:px-0">
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
            <div className="animate_left mx-auto md:text-center">
              <h1 className="text-hid-title mb-5 text-left text-[4vw] text-white dark:text-white">
                Empower <span className="text-primary">Your Business </span>
              </h1>
            </div>
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
            <div className="animate_top mx-auto">
              <p className="text-sub-hero text-left text-white dark:text-white">
                We'll match you with top-tier talent perfectly suited for your
                project, swiftly assemble a high-performing team, and provide
                ongoing support to optimize performance. Our goal is to ensure
                your team seamlessly integrates into your business, driving
                results and achieving your project objectives.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
