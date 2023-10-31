import "./navbar.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          Adele Dev
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="./linkedin.png" alt="linkedin"></img>
          </a>
          <a href="#">
            <img src="./gmail.png" alt="gmail"></img>
          </a>
          <a href="#">
            <img src="./facebook.png" alt="facebook"></img>
          </a>
        </div>
      </div>
    </div>
  );
};
