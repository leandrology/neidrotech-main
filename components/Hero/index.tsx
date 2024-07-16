"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <section className="overflow-hidden pb-20 pt-35 md:pt-10 xl:pb-10 xl:pt-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
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
                className="animate_left mx-auto"
              >
              <h1 className="mb-5 pr-12 text-hero text-black dark:text-white xl:pl-25 xl:pb-5">
                Turning Ideas 
              </h1>
              <h1 className="mb-5 pr-12 text-hero text-black dark:text-white xl:pb-10">
                 Into Reality
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
              <p className="text-sub-hero text-black dark:text-white">
              Niedrotech is your digital partner, transforming ideas into captivating visuals and interactive experiences. Our team of skilled designers and developers collaborates closely to solve complex challenges, crafting unique solutions that exceed expectations and keep audiences engaged.
              </p>
              </motion.div>
              <div className="mt-10 items-center justify-center w-1/2">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    {/* <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    /> */}
                    {/* <button
                      aria-label="get started button"
                      className="flex rounded-full bg-red px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-redho dark:bg-red dark:hover:bg-redho"
                    >
                      Get Started
                    </button> */}
                  </div>
                </form>
              </div>
            </div>
            
            <div className="animate_right hidden md:w-1/2 lg:block">
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
                <div className=" relative aspect-[500/444] w-full">
                  <Image
                    className="dark:hidden"
                    src="/images/hero/rocket-hero.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block"
                    src="/images/hero/rocket-hero.png"
                    alt="Hero"
                    fill
                  />
                </div>
              </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
