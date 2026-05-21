'use client'
import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 1, 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="relative w-14 h-14 flex items-center justify-center mb-6">
        <motion.div
          className="absolute w-full h-full border-[3px] border-transparent border-t-[#072AC8] dark:border-t-[#1E96FC] border-b-[#072AC8]/20 dark:border-b-[#1E96FC]/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={spinTransition}
        />

        <motion.div
          className="absolute w-10 h-10 border-2 border-transparent border-l-[#1E96FC] dark:border-l-[#072AC8] rounded-full"
          animate={{ rotate: -360 }}
          transition={spinTransition}
        />

        <motion.div
          className="w-3 h-3 bg-[#072AC8] dark:bg-[#1E96FC] rounded-full"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 tracking-wide">
          Loading...
        </h2>
      </motion.div>
    </div>
  );
};

export default LoadingPage;
