"use client";
import { Expertise } from "@/types/expertise";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ExpertiseItem = ({ expertise }: { expertise: Expertise }) => {
  const { mainImage, title, metadata, slug } = expertise;

  return (
    <>
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
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link
          href={`/expertise/${slug}`}
          className="relative block aspect-[368/239]"
        >
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="px-0 md:px-4">
          <h3 className="text-section-title mb-3.5 mt-7.5 inline-block font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-3xl">
            <Link href={`/expertise/${slug}`}>{title}</Link>
          </h3>
          <p className="text-sub-feature text-black dark:text-white">
            {metadata}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default ExpertiseItem;
