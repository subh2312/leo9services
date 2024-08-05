import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import "./App.css";

const App = () => {
  const [scrollStep, setScrollStep] = useState(-1);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  const texts = [
    { title: "Design", subItems: ["UI Design", "UX Design", "Graphic Design"] },
    { title: "Technology", subItems: ["AI", "Blockchain", "Cloud Computing"] },
    { title: "Business", subItems: ["Marketing", "Finance", "Management"] },
  ];

  const handleScroll = (event) => {
    const now = Date.now();
    if (now - lastScrollTime < 1500) return; // Debounce time of 1500ms
    setLastScrollTime(now);

    if (event.deltaY > 0) {
      // Scroll down
      setScrollStep((prev) => Math.min(prev + 1, texts.length - 1));
    } else {
      // Scroll up
      setScrollStep((prev) => Math.max(prev - 1, -1));
    }
  };

  // Swipe handlers
  const handleSwipeUp = () => {
    setScrollStep((prev) => Math.min(prev + 1, texts.length - 1));
  };

  const handleSwipeDown = () => {
    setScrollStep((prev) => Math.max(prev - 1, -1));
  };

  // Set up swipeable handlers
  const swipeHandlers = useSwipeable({
    onSwipedUp: handleSwipeUp,
    onSwipedDown: handleSwipeDown,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Optional: allows mouse swipe tracking
  });

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [lastScrollTime]);

  return (
    <div className="flex justify-center items-center" {...swipeHandlers}>
      <div className="centered-container flex flex-col items-center overflow-x-scroll p-4 md:p-8">
        {texts.map((text, index) => (
          <motion.div
            className="w-full p-4 md:p-8 mb-4 md:mb-8"
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: scrollStep === -1 || scrollStep === index ? 1 : 0,
              y: scrollStep === -1 || scrollStep === index ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2 }} // Infinite rotation with a duration of 2 seconds
                className="h-16 w-16 md:h-20 md:w-20 rounded-full border-dotted border-2 border-spacing-28 border-black flex justify-center items-center"
              >
                <div
                  className={`h-12 w-12 md:h-14 md:w-14 rounded-full ${
                    text.title === "Design"
                      ? "bg-[#fb5457]"
                      : text.title === "Business"
                      ? "bg-[#9c34f0]"
                      : "bg-[#5857f9]"
                  }`}
                ></div>
              </motion.div>
              <h2 className={`text-3xl md:text-7xl `}>{text.title}</h2>
            </div>
            {scrollStep === index && (
              <div className="flex flex-col gap-4">
                {text.subItems.map((subItem, subIndex) => (
                  <motion.div
                    className={`text-xl md:text-4xl ${
                      text.title === "Design"
                        ? "pl-16 lg:pl-32"
                        : "pl-8 lg:pl-36"
                    } md:pl-28`}
                    key={subIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, delay: subIndex * 0.1 }}
                  >
                    {subItem}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;
