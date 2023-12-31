const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    staggerChildren: 0.05,
    straggerDirection: -1,
  },
};
import { motion } from "framer-motion";

const itemVariants = {
  open: {
    y: 50,
    opacity: 1,
  },
  closed: {
    y: -20,
    opacity: 0,
  },
};

export const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};
