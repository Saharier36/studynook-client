"use client";

import { motion } from "framer-motion";

export default function AnimatedCard({ children, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ 
        duration: 0.6, 
        delay: (index % 3) * 0.1, // Smooth column-based stagger wave for 3-column desktop layout
        ease: [0.215, 0.61, 0.355, 1] // Premium fluid cubic-bezier curve
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
