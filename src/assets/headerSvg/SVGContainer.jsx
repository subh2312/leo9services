import { motion } from "framer-motion";
const DotSVG = () => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
      fill="#000000"
    />
  </svg>
);

const DownArrowSVG = () => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 9L7 2H17L12 9ZM12 15L7 20H17L12 15Z" fill="#000000" />
  </svg>
);
const SVGContainer = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DotSVG />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <DownArrowSVG />
      </motion.div>
    </>
  );
};

export default SVGContainer;
