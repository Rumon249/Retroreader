import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedCharacter = ({ imageSrc, alt = "Character", className = "" }) => {
  return (
    <AnimatePresence>
      {showImage && (
        <motion.img
          key={triggerKey}
          src={imageSrc}
          alt={alt}
          className={className}
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}
      <motion.img
        src={imageSrc}
        alt={alt}
        className={`animated-character ${className}`}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </AnimatePresence>
  );
};

export default AnimatedCharacter;

