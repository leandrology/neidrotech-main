"use client";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import ServicesData from "./servicesData";
import Image from "next/image";
import ServiceItem from "./serviceItem";

const Services = async () => {
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
                Empower <span className="text-primary">Your Business </span>
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
                We'll match you with top-tier talent perfectly suited for your
                project, swiftly assemble a high-performing team, and provide
                ongoing support to optimize performance. Our goal is to ensure
                your team seamlessly integrates into your business, driving
                results and achieving your project objectives.
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
              <h1 className="text-hid-title mx-auto mt-5 pb-5 pt-10 text-black dark:text-white md:pt-20 xl:w-full">
                Managed Services Advantage
              </h1>
              <p className="text-sub-hero mx-auto text-black dark:text-white md:w-full">
                In today's fiercely competitive business environment, finding a
                reliable source for top-tier offshore talent is crucial. Our
                managed services fill this role perfectly. We draw on our
                extensive experience to deliver superior operational backing and
                outsourcing solutions. These offerings are not only efficient
                but also adaptable, growing in tandem with your business
                requirements.
              </p>

              <div className="pt-10">
                <p className="text-sub-hero mb-3 text-black dark:text-white">
                  <strong className="text-primary">Proven Expertise: </strong>
                  Our extensive industry experience has given us deep insight
                  into the complex needs of today's businesses. We provide
                  top-tier, dedicated professionals to ensure your company
                  operates efficiently and effectively.
                </p>
                <p className="text-sub-hero mb-3 text-black dark:text-white">
                  <strong className="text-primary">Scalable Solutions: </strong>
                  We offer flexible managed services that evolve with your
                  company. From emerging startups to established corporations,
                  our customized solutions cater to businesses of all sizes and
                  stages.
                </p>
                <p className="text-sub-hero mb-3 text-black dark:text-white">
                  <strong className="text-primary">Full-time Support: </strong>
                  Our comprehensive managed services include top-notch HR and IT
                  support, designed to keep your business running smoothly
                  without interruption. We're committed to minimizing downtime
                  and maximizing your operational efficiency.
                </p>
                <p className="text-sub-hero mb-3 text-black dark:text-white">
                  <strong className="text-primary">
                    Tailored Strategies:{" "}
                  </strong>
                  Through close collaboration, we gain a deep understanding of
                  your unique requirements. This allows us to create and
                  implement customized managed services solutions tailored
                  precisely to your business needs.
                </p>
                <p className="text-sub-hero mb-3 text-black dark:text-white">
                  <strong className="text-primary">Cost-Effective: </strong>
                  Excellence doesn't have to be expensive. Our managed services
                  offer premium quality at competitive rates, providing
                  exceptional value for your investment.
                </p>
                <p className="text-sub-hero mb-3 text-black dark:text-white">
                  <strong className="text-primary">Future-Proof: </strong>
                  Embrace innovation with our cutting-edge solutions. We
                  anticipate industry trends and emerging challenges, equipping
                  your business to confidently navigate the future.
                </p>
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
                  className="animate_right"
                >
                  <h1 className="text-section-title mx-auto mt-5 pb-2 pt-20 text-center text-black dark:text-white xl:w-full">
                    Managed Services Solutions
                  </h1>
                </motion.div>
              </div>
            </motion.div>
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="mx-auto mt-5 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-2 xl:gap-10">
            {ServicesData.slice(0, 4).map((services, key) => (
              <ServiceItem services={services} key={key} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
