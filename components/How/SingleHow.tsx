import React from "react";
import { How } from "@/types/how";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleHow = ({ how }: { how: How }) => {
  const { icon, title, description } = how;

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
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative flex items-center justify-center">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
            <Image src={icon} width={36} height={36} alt="title" />
          </div>
        </div>
        <h3 className="mb-5 mt-7.5 text-center text-2xl text-black dark:text-white">
          {title}
        </h3>
        <p className="text-center text-xl text-black dark:text-white">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default SingleHow;
