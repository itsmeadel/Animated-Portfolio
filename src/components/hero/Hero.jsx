import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: "-220%",
//     transition: {
//       repeat: Infinity,
//       duration: 20,
//       staggerChildren: 0.1,
//     },
//   },
// };

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MARY ADELAINE DIOLA</motion.h2>
          <motion.h1 variants={textVariants}>
            Aspiring Full Stack Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See my Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="./scroll.png"
            alt="scroll"
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <div
        className="slidingTextContainer"
        // variants={sliderVariants}
        // initial="initial"
        // animate="animate"
      >
        Developer
      </div>
      <div className="imageContainer">
        <img src="./hero.png" alt="heroImage" />
      </div>
    </div>
  );
};
