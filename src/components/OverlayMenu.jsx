import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

import React from 'react';

const OverlayMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        
        <motion.div className="fixed top-0 right-0 h-full w-[100%] sm:w-[60%] lg:w-[25%] flex justify-center items-center z-100 bg-black">
          <button className="fixed top-3 right-3 focus:outline-none" aria-label="Close menu">
            <FiX size={40} color="#fff" onClick={onClose} />
          </button>
          <ul className="flex justify-center items-center  gap-5 lg:gap-10 flex-col">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achivements', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="text-4xl lg:text-3xl text-white font-semibold hover:text-pink-400 transition-colors duration-500"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverlayMenu;