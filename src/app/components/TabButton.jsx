import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  // Define colors based on active state
  const buttonClasses = active ? "text-pink-300" : "text-[#ADB7BE]";
  const underlineColor = active ? "bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500" : "bg-transparent";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-pink-300 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`h-1 mt-2 mr-3 ${underlineColor}`}
        style={{
          background: active ? 'linear-gradient(to right, #9f7aea, #f472b6, #60a5fa)' : 'transparent',
        }}
      ></motion.div>
    </button>
  );
};

export default TabButton;
