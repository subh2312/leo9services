import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import DesignImg from "../assets/DesignImg.png";
import TechImg from "../assets/TechImg.png";
import BizImg from "../assets/BizImg.png";
const data = [
  {
    id: 1,
    text: "Design",
    img: DesignImg,
    items: [
      {
        id: 1,
        text: "Web Design",
      },
      {
        id: 2,
        text: "Graphic Design",
      },
      {
        id: 3,
        text: "UI/UX Design",
      },
    ],
  },
  {
    id: 2,
    text: "Technology",
    img: TechImg,
    items: [
      {
        id: 1,
        text: "Web Development",
      },
      {
        id: 2,
        text: "Mobile Development",
      },
      {
        id: 3,
        text: "DevOps",
      },
    ],
  },
  {
    id: 3,
    text: "Business",
    img: BizImg,
    items: [
      {
        id: 1,
        text: "Business Development",
      },
      {
        id: 2,
        text: "Business Analysis",
      },
      {
        id: 3,
        text: "Business Strategy",
      },
    ],
  },
];

const Images = ({ text, items, img }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 650]);
  const controls = useAnimation();

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest > 0) {
        controls.start({ x: 0, opacity: 1 });
      } else {
        controls.start({ x: -400, opacity: 0 });
      }
    });
  }, [scrollYProgress, controls]);
  return (
    <section className=" lg:pt-32 lg:pl-0 flex flex-col justify-start lg:items-center items-start">
      <div ref={ref} className="lg:text-7xl sm:text-4xl">
        {text}
      </div>
      {items.map((item) => (
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={controls}
          exit={{ x: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={item.id}
          className="lg:text-4xl sm:text-xl"
        >
          {item.text}
        </motion.div>
      ))}
      <div>
        <motion.img
          src={img}
          initial={{ x: 0, opacity: 0 }}
          animate={controls}
          exit={{ x: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-96 w-96"
        />
      </div>
    </section>
  );
};

export default function Services() {
  return (
    <div className="services overflow-y-scroll w-50 lg:p-32 left-10 lg:translate-x-0 translate-x-1/2">
      {data.map((img) => (
        <Images
          key={img.id}
          text={img.text}
          url={img.url}
          items={img.items}
          img={img.img}
        />
      ))}
    </div>
  );
}
