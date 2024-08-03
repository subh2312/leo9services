import logolight from "../assets/logolight.svg";
import themeIcon from "../assets/themeIcon.svg";
import { AnimatePresence, motion } from "framer-motion";
import DotIcon from "../assets/dot.svg"; // Adjust the path as necessary
import DownArrowIcon from "../assets/downArrow.svg";
import { useEffect, useState } from "react";
import ThemePointer from "../assets/themepointer.svg";

const AnimatedDotIcon = ({ isVisible }) => (
  <motion.img
    src={DotIcon}
    alt="Dot Icon"
    initial={{ opacity: isVisible ? 1 : 0 }}
    animate={{ opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 0.3 }}
  />
);

const AnimatedDownArrowIcon = ({ isVisible }) => (
  <motion.img
    src={DownArrowIcon}
    alt="Down Arrow Icon"
    initial={{ opacity: isVisible ? 0 : 1 }}
    animate={{ opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 0.3 }}
  />
);

const Navbar = () => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isThemeIconAnimated, setIsThemeIconAnimated] = useState(false);
  const [showThemePointer, setShowThemePointer] = useState(false);
  const [hideElements, setHideElements] = useState(false);
  const [isThemeIconReady, setIsThemeIconReady] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsThemeIconReady(true);
    }, 1000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <header className="fixed w-full">
      <nav className="flex justify-between px-6 md:px-52 items-center py-2 border-2">
        <div>
          <img src={logolight} alt="Logo" className="w-max h-[54px]" />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black"
          >
            ☰
          </button>
        </div>
        <div
          className={`flex-col md:flex-row md:flex justify-between gap-10 items-center ${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <div className="font-satoshi font-medium text-[16px]">Work</div>
          <div
            className="font-satoshi font-medium text-[16px] flex p-0 m-0 items-center group"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            Services
            <div className="w-10 h-10 -ml-2 flex items-center justify-center relative">
              {isServicesHovered ? (
                <motion.img
                  src={DownArrowIcon}
                  alt="Down Arrow Icon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className=""
                />
              ) : (
                <motion.img
                  src={DotIcon}
                  alt="Dot Icon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className=""
                />
              )}
            </div>
          </div>
          <div className="font-satoshi font-medium text-[16px] -ml-2">
            Clients
          </div>
          <div
            className="font-satoshi font-medium text-[16px] flex p-0 m-0 items-center group"
            onMouseEnter={() => setIsAboutHovered(true)}
            onMouseLeave={() => setIsAboutHovered(false)}
          >
            About
            <div className="w-10 h-10 -ml-2 flex items-center justify-center relative">
              {isAboutHovered ? (
                <motion.img
                  src={DownArrowIcon}
                  alt="Down Arrow Icon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
              ) : (
                <motion.img
                  src={DotIcon}
                  alt="Dot Icon"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
              )}
            </div>
          </div>
          <div className="font-satoshi font-medium text-[16px] -ml-2">
            Knowledge
          </div>
          <div className="relative">
            {isThemeIconReady && (
              <motion.img
                src={themeIcon}
                alt="Theme Icon"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 300, // Lower stiffness for slower bounce
                  damping: 10, // Higher damping for slower bounce
                  duration: 2, // Adjust duration as needed
                }}
                className="w-10 h-10"
                onAnimationComplete={() => setIsThemeIconAnimated(true)}
              />
            )}
          </div>
          <div className="lg:relative hidden ">
            <motion.button
              className="text-white bg-black rounded-md py-4 px-12 font-satoshi font-black text-[18px] relative overflow-hidden flex items-center justify-center min-w-36 min-h-16"
              whileHover="hover"
            >
              <AnimatePresence initial={false}>
                <motion.span
                  key="contact"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  variants={{
                    hover: { opacity: 0, y: -20 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  Contact
                </motion.span>
                <motion.span
                  key="hi"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0, y: 20 }}
                  variants={{
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  Contact
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>
      {isThemeIconAnimated && !hideElements && (
        <div className="absolute top-5 right-1 transform -translate-x-1/2">
          <motion.button
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 500 }}
            transition={{
              type: "spring",
              stiffness: 300, // Lower stiffness for slower bounce
              damping: 10, // Higher damping for slower bounce
              duration: 2, // Adjust duration as needed
            }}
            className="absolute mt-16 ml-16 pl-16"
            onAnimationComplete={() => setShowThemePointer(true)}
          >
            Switch
            <br />
            Mode
          </motion.button>
          {showThemePointer && (
            <motion.img
              src={ThemePointer}
              alt="Down Arrow Icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-8 mr-4"
              onAnimationComplete={() => {
                const timer = setTimeout(() => {
                  setHideElements(true);
                }, 4000);

                return () => {
                  clearTimeout(timer);
                };
              }}
            />
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
