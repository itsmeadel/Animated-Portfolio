const variants = {
  open: {
    transition: {
      staggeredChildren: 0.1,
    },
  },
  closed: {
    y: 0,
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
        <motion.a href={`#${item}`} key={item} variants={itemVariants}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};
