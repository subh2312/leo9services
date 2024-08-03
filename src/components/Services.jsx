import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
const data = [
  {
    id: 1,
    text: "Design",
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

const Images = ({ text, items }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 650]);
  const controls = useAnimation();

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest > 0.1) {
        controls.start({ x: 0, opacity: 1 });
      } else {
        controls.start({ x: -200, opacity: 0 });
      }
    });
  }, [scrollYProgress, controls]);
  return (
    <section className="flex flex-col pt-32 pl-32 lg:pl-0 w-screen">
      <div ref={ref} className="text-7xl">
        {text}
      </div>
      {items.map((item) => (
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={controls}
          exit={{ x: 0, opacity: 0 }}
          transition={{ duration: 1 }}
          key={item.id}
          className="text-4xl overflow-y-hidden"
        >
          {item.text}
        </motion.div>
      ))}
    </section>
  );
};

export default function Services() {
  return (
    <div className="services overflow-y-auto overflow-x-auto">
      {data.map((img) => (
        <Images key={img.id} text={img.text} url={img.url} items={img.items} />
      ))}
    </div>
  );
}
