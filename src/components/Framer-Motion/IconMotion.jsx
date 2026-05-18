"use client";

import { motion } from "framer-motion";

const IconMotion = () => {
  return (
    <span className="relative flex size-2">
      <motion.span
        className="absolute inline-flex size-full rounded-full bg-green-500"
        animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
      />
      <span className="relative inline-flex size-2 rounded-full bg-green-500" />
    </span>
  );
};

export default IconMotion;
