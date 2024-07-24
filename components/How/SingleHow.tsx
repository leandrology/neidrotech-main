import React from "react";
import { How } from "@/types/how";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleHow = ({ how }: { how: How }) => {
  const { icon, title, description, id } = how;

  return (
    <div>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white py-3 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="pt-[-100px] ">
          <div className="mb-[-40px] flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
            <p className="text-metatitle2 font-semibold text-black dark:text-white">
              {id}
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
            <Image src={icon} width={36} height={36} alt="title" />
          </div>
        </div>

        <h3 className="text-feature-title mb-0 mt-3 text-center text-black dark:text-white">
          {title}
        </h3>
        <p className="text-sub-feature text-center text-black dark:text-white">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default SingleHow;
