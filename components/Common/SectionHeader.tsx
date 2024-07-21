"use client";
import { motion } from "framer-motion";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
  subtitle2: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, subtitle2, description } = headerInfo;

  return (
    <div>
      {/* <!-- Section Title Start --> */}

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
        className="animate_top mx-auto text-center"
      >
        {/* <div className="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
          <span className="text-sectiontitle font-medium text-black dark:text-white">
            {title}
          </span>
        </div> */}
        <h2 className="text-section-title xl:text-section-title mx-auto mb-4 font-medium text-black dark:text-white md:w-4/5 xl:w-full">
          {subtitle}
        </h2>
        <h2 className="text-section-title xl:text-section-title mx-auto mb-4 font-medium text-black dark:text-white md:w-4/5 xl:w-full">
          {subtitle2}
        </h2>
        <p className="text-sub-hero mx-auto text-black dark:text-white md:w-4/5 lg:w-3/5 xl:w-[76%]">
          {description}
        </p>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </div>
  );
};

export default SectionHeader;
