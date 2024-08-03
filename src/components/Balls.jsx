import React from "react";
import { motion } from "framer-motion";

const listVariants = {
  hidden: {
    transform: "translate3d(0px, 0px, 0px) rotate(63.0813deg)",
    opacity: 0,
    top: "50%",
    left: "50%",
    height: "200px",
    width: "200px",
    marginLeft: "-100px",
    marginTop: "-100px",
    position: "absolute",
  },
  visible: {
    transform: "rotate(180deg)",
    opacity: 0.2102,
    top: "50%",
    left: "50%",
    height: "50vw",
    width: "50vw",
    marginLeft: "-25vw",
    marginTop: "-25vw",
    position: "absolute",
    transition: {
      duration: 2,
    },
  },
};

const itemVariants = {
  hidden: {
    height: "0px",
    width: "0px",
  },
  visible: {
    height: "30px",
    width: "30px",
    transition: {
      duration: 2,
    },
  },
};

const Balls = ({ bannerInView, aboutInView }) => {
  const colors = [
    "rgb(251,84,87)",
    "rgb(251,84,87)",
    "rgb(251,84,87)",
    "rgb(251,84,87)",
    "rgb(251,84,87)",
    "rgb(88,87,249)",
    "rgb(88,87,249)",
    "rgb(88,87,249)",
    "rgb(88,87,249)",
    "rgb(88,87,249)",
    "rgb(156,52,240)",
    "rgb(156,52,240)",
  ];

  const getRandomPosition = () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    return { top: `${y}%`, left: `${x}%` };
  };

  return (
    <motion.ul
      className="dotBox h-screen"
      initial="hidden"
      animate={bannerInView || aboutInView ? "visible" : "hidden"}
      variants={listVariants}
    >
      {colors.map((color, i) => {
        const position = getRandomPosition();
        return (
          <motion.li
            key={i}
            className={`dotIn${i + 1}`}
            style={{
              backgroundColor: color,
              borderRadius: "50%", // Make the balls circular
              margin: "5px", // Add some margin for spacing
              position: "absolute",
              ...position,
            }}
            variants={itemVariants}
          />
        );
      })}
    </motion.ul>
  );
};

export default Balls;
