import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import BannerImageBefore from "../assets/ bannerImg_before.svg";
import BannerImageAfter from "../assets/ bannerImg_after.svg";
import DotImage from "../assets/dot.svg";
import Balls from "./Balls";
import { useInView } from "react-intersection-observer";

const Banner = ({ setBannerInView }) => {
  const controlsBefore = useAnimation();
  const controlsAfter = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  React.useEffect(() => {
    setBannerInView(inView);
  }, [inView, setBannerInView]);

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controlsBefore.start({
          opacity: 0,
          scale: 0,
          rotate: 360,
          transition: { duration: 1 },
        });
        // BannerImgBefore appears
        await controlsBefore.start({
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { duration: 1 },
        });
        // Rotative Shrinks to a dot
        await controlsBefore.start({
          opacity: 0,
          scale: 0,
          rotate: 360,
          transition: { duration: 1 },
        });
        // Explodes back to BannerImgBefore
        await controlsBefore.start({
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { duration: 1 },
        });
        // Rotative Shrinks again
        await controlsBefore.start({
          opacity: 0,
          scale: 0,
          rotate: 360,
          transition: { duration: 2 },
        });
        // Explodes to BannerImgAfter
        await controlsAfter.start({
          opacity: 0,
          scale: 1,
          rotate: 0,
          transition: { duration: 2 },
        });
        await controlsAfter.start({
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { duration: 1 },
        });
        // Resets for the next loop
        await controlsAfter.start({
          opacity: 0,
          scale: 1,
          rotate: 0,
          transition: { duration: 2 },
        });
      }
    };
    sequence();
  }, [controlsBefore, controlsAfter]);

  return (
    <div
      ref={ref}
      className="flex w-[100vw] h-[50vh] mx-auto gap-x-12 pt-32 pb-32"
    >
      <div className="w-[50%] flex items-center justify-end">
        <motion.img
          src={BannerImageBefore}
          alt="Banner Image Before"
          initial={{ opacity: 0, scale: 1 }}
          animate={controlsBefore}
          className="absolute w-[30%]"
        />
        <motion.img
          src={BannerImageAfter}
          alt="Banner Image After"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={controlsAfter}
          className="absolute w-[30%]"
        />
      </div>
      <div className="flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start"
        >
          <div className="banner-text font-satoshi font-bold text-8xl text-left">
            <div>Design</div>
            <div>Transform</div>
            <div>Accelerate</div>
          </div>
          <div className="font-satoshi font-bold text-2xl pt-3">
            We Revolutionize User Experience
            <br />
            Using Behavioural Science.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
