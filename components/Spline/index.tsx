import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function SplineImage() {
  return (
    <div>
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
        <Spline
          scene="https://prod.spline.design/AhElOOUYLLit6lVH/scene.splinecode"
          style={{ width: "100%", height: "100%", borderRadius: "1.5rem" }}
        />
      </motion.div>
    </div>
  );
}
