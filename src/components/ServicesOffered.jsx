import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ServicesOffered = ({ prevRef }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [500, 500]);
  return (
    <div className="h-screen">
      <div className="relative grid grid-rows-3 justify-center items-center pt-20 h-screen services">
        <div className="flex items-center ">
          <motion.div
            ref={ref}
            className="h-20 w-20 border-dotted rounded-full border-2 border-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <b
            ref={ref}
            className="text-6xl font-satoshi font-black ml-4 mx-auto "
          >
            Design
          </b>
          <motion.div
            className=""
            // initial={{ opacity: 0, y: 1024 }}
            // animate={{ opacity: 1, y: 500 }}
            transition={{ duration: 2 }}
            style={{ y }}
          >
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
          </motion.div>
        </div>
        <div className="flex items-center">
          <motion.div
            className="h-20 w-20 border-dotted rounded-full border-2 border-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <b className="text-6xl font-satoshi font-black ml-4">Technology</b>
        </div>
        <div className="flex items-center">
          <motion.div
            className="h-20 w-20 border-dotted rounded-full border-2 border-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <b className="text-6xl font-satoshi font-black ml-4">Business</b>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffered;
