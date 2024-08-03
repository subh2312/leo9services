import React, { useRef } from "react";
import { motion } from "framer-motion";
import Wave from "react-wavify";

const wave1 = {
  hidden: {
    opacity: 1,
    backgroundPositionX: "0px",
  },
  visible: {
    backgroundPositionX: "1000px",
    backgroundColor: "#5857f9",
    zIndex: 1000,
    opacity: 1,
    transition: {
      loop: Infinity,
      ease: "linear",
      duration: 25,
    },
  },
};

const wave2 = {
  hidden: {
    opacity: 1,
    backgroundPositionX: "0px",
  },
  visible: {
    backgroundPositionX: "-1000px",
    backgroundColor: "#5857f9",
    zIndex: 999,
    opacity: 1,
    transition: {
      loop: Infinity,
      ease: "linear",
      duration: 25,
    },
  },
};

const wave3 = {
  hidden: {
    opacity: 1,
    backgroundPositionX: "0px",
  },
  visible: {
    backgroundPositionX: "1000px",
    backgroundColor: "#fb5457",
    zIndex: 997,
    opacity: 1,
    transition: {
      loop: Infinity,
      ease: "linear",
      duration: 25,
    },
  },
};

const AboutUsImg = () => {
  return (
    <div className="lg:flex lg:pt-32">
      <div className="aboutus-image w-[50%] pt-32 mx-64 ">
        <div className="circle flex items-center justify-center">
          <div className="circle-left relative lg:block hidden">
            <div className="absolute h-36 w-36 rounded-full border-2 border-black bg-black z-10 transform -translate-y-1/2"></div>
            <div className="absolute h-36 w-36 rounded-full border-2 border-black bg-white z-10 rotate-90 -top-20 left-4 flex items-center justify-center">
              <div className="absolute h-24 w-24 rounded-full border-2 border-black bg-[#fb5457] z-10"></div>
            </div>
          </div>
          <div className="horizontal-line relative h-0.5 bg-black flex-grow lg:block hidden"></div>
          <div className="circle-center relative">
            <div className="absolute h-56 w-56 rounded-full border-2 border-black bg-black z-10 transform -translate-y-1/2"></div>
            <div className="absolute h-56 w-56 rounded-full border-2 border-black bg-white z-10 -top-32 left-4 rotate-90 flex items-center justify-center">
              <div className="absolute h-40 w-40 rounded-full border-2 border-black bg-white z-10">
                <Wave
                  className="-rotate-90 absolute top-8 left-9 right-10"
                  fill="rgb(156,52,240)"
                  style={{ height: "100px" }}
                  mask="url(#mask)"
                  options={{
                    height: 20,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3,
                  }}
                >
                  <mask id="mask" className="-rotate-90">
                    <path d="M 4 20 A 10 10 1 1 0 160 10" fill="white" />
                  </mask>
                </Wave>
                <Wave
                  className="-rotate-90 absolute top-8 left-9 right-10"
                  fill="#5857f9"
                  style={{ height: "100px" }}
                  mask="url(#mask)"
                  options={{
                    height: 20,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3,
                  }}
                >
                  <mask id="mask" className="-rotate-90">
                    <path d="M 4 20 A 10 10 1 1 0 160 10" fill="white" />
                  </mask>
                </Wave>
                <Wave
                  className="-rotate-90 absolute top-8 left-9 right-10"
                  fill="rgb(251,84,87)"
                  style={{ height: "100px" }}
                  mask="url(#mask)"
                  options={{
                    height: 20,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3,
                  }}
                >
                  <mask id="mask" className="-rotate-90">
                    <path d="M 4 20 A 10 10 1 1 0 160 10" fill="white" />
                  </mask>
                </Wave>
              </div>
            </div>
          </div>{" "}
          <div className="horizontal-line relative h-0.5 bg-black flex-grow lg:block hidden"></div>
          <div className="circle-right relative lg:block hidden">
            <div className="absolute h-36 w-36 rounded-full border-2 border-black bg-black z-10 transform -translate-y-1/2"></div>
            <div className="absolute h-36 w-36 rounded-full border-2 border-black bg-white z-10 -top-20 left-4 flex items-center justify-center">
              <div className="absolute h-24 w-24 rounded-full border-2 border-black bg-[#5857f9] z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsImg;
