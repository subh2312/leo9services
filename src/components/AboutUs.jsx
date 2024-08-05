import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AboutUsLogo from "../assets/aboutUsLogo.svg";
import Svg1 from "../assets/svg1.svg";
import Svg2 from "../assets/svg2.svg";
import AboutUsImg from "./AboutUsImg";

const AboutUs = ({ setAboutInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Ensure the animation triggers only once
  });

  React.useEffect(() => {
    setAboutInView(inView);
  }, [inView, setAboutInView]);

  return (
    <div
      ref={ref}
      className="about-section lg:pt-32 h-screen grid grid-rows-2 "
    >
      {/* About content */}
      <div className="aboutus-text pr-10 ">
        <motion.div
          className=" "
          initial={{ opacity: 0, y: 800 }}
          animate={inView ? { opacity: 1, y: 100 } : { opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <h3 className="font-satoshi text-5xl font-black w-[65%] mx-auto">
            We are a global creative agency that combines design expertise with
            technology and intelligence.
          </h3>
        </motion.div>
      </div>
      <AboutUsImg />
    </div>
  );
};

export default AboutUs;
